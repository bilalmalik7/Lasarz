const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    'https://lasarz.com/wp-content/uploads/2022/11/Element-1resize22.svg',
    'https://lasarz.com/wp-content/uploads/2025/04/Stempel-DIAZert-2025.jpg',
    'https://lasarz.com/wp-content/uploads/2025/06/NEU-Logo-DIAzert_7-09-300x228.jpg',
    'https://lasarz.com/wp-content/uploads/2024/11/immobiliengutachter-osnabrueck.png',
    'https://lasarz.com/wp-content/uploads/2022/11/REV-Siegel_2018-002.jpg',
    'https://lasarz.com/wp-content/uploads/2025/06/bvs_e_v_logo.jpeg',
    'https://lasarz.com/wp-content/uploads/2025/04/SV-R-Immo-D3_042028_ger_tc_p-182x300.jpg',
    'https://lasarz.com/wp-content/uploads/2022/11/MG_1880-1024x690.jpg',
    'https://lasarz.com/wp-content/uploads/2022/07/Lasarz_Logo_dunkelblau-1-2.png',
    'https://lasarz.com/wp-content/uploads/2023/11/HASELAND_11-1024x690.jpg'
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {
                reject(err);
            });
        });
    });
};

async function run() {
    const dir = '/Users/muhammadbilal/Documents/Lasarz/public/images/original_clone';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    for (let img of images) {
        const parts = img.split('/');
        const filename = parts[parts.length - 1];
        const dest = path.join(dir, filename);
        console.log("Downloading", filename);
        try {
            await download(img, dest);
        } catch (e) {
            console.error("Failed", filename, e.message);
        }
    }
    console.log("Done");
}

run();
