const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('/tmp/lasarz_home.html', 'utf8');
const $ = cheerio.load(html);

console.log("=== HEADINGS ===");
$('h1, h2, h3, h4').each((i, el) => {
    console.log($(el).prop('tagName'), $(el).text().trim().replace(/\s+/g, ' '));
});

console.log("\n=== PARAGRAPHS ===");
$('p').each((i, el) => {
    const text = $(el).text().trim().replace(/\s+/g, ' ');
    if (text) console.log(text);
});

console.log("\n=== IMAGES ===");
$('img').each((i, el) => {
    console.log($(el).attr('src'));
});

console.log("\n=== IFRAMES / VALUATION TOOL ===");
$('iframe').each((i, el) => {
    console.log("Iframe:", $(el).attr('src') || $(el).attr('data-src'));
});

console.log("\n=== SCRIPTS WITH src ===");
$('script[src*="bewertung"], script[src*="valuation"]').each((i, el) => {
    console.log("Script:", $(el).attr('src'));
});
