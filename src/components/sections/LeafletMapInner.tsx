"use client";

import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationItem } from './RegionMap';

// Geo-coordinates mapping for our locations
const geoCoordinates: Record<string, [number, number]> = {
  'Osnabrück HQ': [52.2799, 8.0472],
  'Münster': [51.9607, 7.6261],
  'Bielefeld': [52.0302, 8.5325],
  'Bünde': [52.2333, 8.5833],
  'Melle': [52.2026, 8.3361],
  'Rheine': [52.2792, 7.4394],
  'Flensburg': [54.7833, 9.4333],
  'Bramsche': [52.4083, 7.9833],
  'Georgsmarienhütte': [52.2028, 8.0472],
  'Ibbenbüren': [52.2778, 7.7167],
  'Lingen': [52.5222, 7.3167],
  'Emsdetten': [52.1722, 7.5306],
  'Steinfurt': [52.1486, 7.3375],
  'Gütersloh': [51.9078, 8.3844],
  'Halle (Westf.)': [52.0597, 8.3614],
  'Warendorf': [51.9575, 7.9861],
  'Bad Oeynhausen': [52.2039, 8.7997],
  'Bad Iburg': [52.1583, 8.0417],
  'Bad Laer': [52.1028, 8.0875],
  'Kirchlengern': [52.2000, 8.6333]
};

// Map view controller component to synchronize with selected location
function MapController({ selectedCoords }: { selectedCoords: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedCoords) {
      map.flyTo(selectedCoords, 10.5, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [selectedCoords, map]);

  return null;
}

interface LeafletMapInnerProps {
  locations: LocationItem[];
  selected: LocationItem;
  setSelected: (loc: LocationItem) => void;
  setHovered: (loc: LocationItem | null) => void;
}

export default function LeafletMapInner({
  locations,
  selected,
  setSelected,
  setHovered
}: LeafletMapInnerProps) {
  
  // Custom marker icons using Leaflet divIcon to avoid asset import bugs in Next.js
  const markerIcons = useMemo(() => {
    const icons: Record<string, { active: L.DivIcon; default: L.DivIcon }> = {};
    
    locations.forEach(loc => {
      const isMain = loc.type === 'Hauptstandort' || loc.type === 'Niederlassung';
      const color = isMain ? '#c4704b' : '#475569';
      
      const createHtml = (active: boolean) => {
        const size = isMain ? (active ? 20 : 14) : (active ? 14 : 10);
        const border = active ? 3 : 2;
        const pulse = isMain ? `
          <div class="leaflet-pulse-ring" style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${active ? 34 : 26}px;
            height: ${active ? 34 : 26}px;
            border: 1.5px solid ${color};
            border-radius: 50%;
            animation: leaflet-ripple 2s infinite;
            pointer-events: none;
          "></div>
        ` : '';

        return `
          <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
            ${pulse}
            <div style="
              width: ${size}px;
              height: ${size}px;
              background-color: ${active ? '#ffffff' : color};
              border: ${border}px solid ${active ? color : '#ffffff'};
              border-radius: 50%;
              box-shadow: 0 4px 12px rgba(0,0,0,0.18);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            "></div>
          </div>
        `;
      };

      icons[loc.name] = {
        active: L.divIcon({
          className: 'leaflet-custom-marker-wrapper',
          html: createHtml(true),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        }),
        default: L.divIcon({
          className: 'leaflet-custom-marker-wrapper',
          html: createHtml(false),
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })
      };
    });

    return icons;
  }, [locations]);

  // Center coordinate based on selected location
  const centerCoords = useMemo<[number, number]>(() => {
    return geoCoordinates[selected.name] || [52.2799, 8.0472];
  }, [selected]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '560px', overflow: 'hidden', borderRadius: '24px' }}>
      <style jsx global>{`
        /* Map custom sepia terracotta luxury styling */
        .leaflet-container {
          background-color: #faf9f7 !important;
          font-family: inherit;
        }
        .leaflet-tile-pane {
          filter: sepia(0.6) hue-rotate(335deg) brightness(0.96) contrast(1.18) saturate(0.85);
        }
        .leaflet-bar {
          border: 1px solid #ebdcb8 !important;
          box-shadow: 0 4px 12px rgba(197, 160, 89, 0.08) !important;
          border-radius: 8px !important;
          overflow: hidden;
        }
        .leaflet-bar a {
          background-color: #ffffff !important;
          color: #c4704b !important;
          border-bottom: 1px solid #ebdcb8 !important;
          transition: all 0.2s ease;
        }
        .leaflet-bar a:hover {
          background-color: #faf8f4 !important;
          color: #a6522d !important;
        }
        
        /* Pulse Animation */
        @keyframes leaflet-ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
      
      <MapContainer
        center={centerCoords}
        zoom={9.5}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((loc) => {
          const coords = geoCoordinates[loc.name];
          if (!coords) return null;
          
          const isSelected = selected.name === loc.name;
          const iconSet = markerIcons[loc.name];
          const currentIcon = isSelected ? iconSet.active : iconSet.default;

          return (
            <Marker
              key={loc.name}
              position={coords}
              icon={currentIcon}
              eventHandlers={{
                click: () => {
                  setSelected(loc);
                },
                mouseover: () => {
                  setHovered(loc);
                },
                mouseout: () => {
                  setHovered(null);
                }
              }}
            />
          );
        })}

        <MapController selectedCoords={centerCoords} />
      </MapContainer>
    </div>
  );
}
