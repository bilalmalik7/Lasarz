const fs = require('fs');
const path = require('path');

const API = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-germany-gemeinde/records';

const cleanName = (raw) =>
  String(raw)
    .replace(/^(Gemeinde|Stadt|Samtgemeinde|Flecken)\s+/i, '')
    .replace(/\s+am Teutoburger Wald$/i, '')
    .trim();

const BLUES = ['#e3edf9', '#c5dbf2', '#9ec3e8', '#6fa3dd', '#4583cf', '#2563b8', '#1b4a93', '#0f3a78'];
const hashShade = (name) => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return BLUES[h % BLUES.length];
};

async function main() {
  try {
    const url =
      API + '?where=' +
      encodeURIComponent('krs_name="Landkreis Osnabrück" OR gem_name="Stadt Osnabrück"') +
      '&limit=80&select=gem_name,geo_shape';
    
    console.log('Fetching from:', url);
    const res = await fetch(url);
    const d = await res.json();
    
    const feats = (d.results || [])
      .map((r) => {
        const nameRaw = Array.isArray(r.gem_name) ? r.gem_name[0] : r.gem_name;
        const geom = r.geo_shape && (r.geo_shape.geometry || r.geo_shape);
        if (!geom || !geom.coordinates) return null;
        return { name: cleanName(nameRaw), geometry: geom };
      })
      .filter(Boolean);
      
    if (feats.length === 0) {
      console.error('No features found!');
      return;
    }
    
    let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
    const polysOf = (g) => (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]);
    
    feats.forEach((f) => 
      polysOf(f.geometry).forEach((poly) => 
        poly.forEach((ring) => 
          ring.forEach(([lon, lat]) => {
            if (lon < minLon) minLon = lon; if (lon > maxLon) maxLon = lon;
            if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
          })
        )
      )
    );
    
    const k = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));
    const W = 1000;
    const scale = W / ((maxLon - minLon) * k);
    const H = (maxLat - minLat) * scale;
    
    const px = (lon) => ((lon - minLon) * k * scale).toFixed(1);
    const py = (lat) => ((maxLat - lat) * scale).toFixed(1);
    
    const built = feats.map((f) => {
      let dd = '';
      polysOf(f.geometry).forEach((poly) => 
        poly.forEach((ring) => {
          ring.forEach(([lon, lat], i) => {
            dd += (i === 0 ? 'M' : 'L') + px(lon) + ',' + py(lat);
          });
          dd += 'Z';
        })
      );
      return { name: f.name, d: dd, shade: hashShade(f.name) };
    });
    
    const outData = {
      viewBox: `0 0 ${W} ${H.toFixed(1)}`,
      regions: built
    };
    
    const dataDir = path.join(__dirname, '..', 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(dataDir, 'osnabrueckRegions.json'),
      JSON.stringify(outData, null, 2),
      'utf-8'
    );
    
    console.log(`Success! Written to ${path.join(dataDir, 'osnabrueckRegions.json')}`);
    console.log(`ViewBox: ${outData.viewBox}`);
    console.log(`Region count: ${outData.regions.length}`);
  } catch (err) {
    console.error('Error running script:', err);
  }
}

main();
