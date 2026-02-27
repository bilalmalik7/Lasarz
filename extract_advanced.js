const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('/tmp/lasarz_home.html', 'utf8');
const $ = cheerio.load(html);

console.log("=== CLASSES RELATED TO Valuation ===");
let valuationHtml = '';
// Try to find any wrapper matching trx, rev, valuation, bewertung
$('[class*="trx"], [id*="trx"], [class*="bewertung"], [id*="bewertung"]').each((i, el) => {
    const rawHtml = $(el).html();
    if (rawHtml && rawHtml.includes('<form') || rawHtml && rawHtml.includes('<input')) {
        valuationHtml = $(el).prop('outerHTML');
    }
});
if (valuationHtml) {
    fs.writeFileSync('/tmp/valuation.html', valuationHtml);
    console.log("Valuation HTML saved to /tmp/valuation.html");
} else {
    console.log("Could not find valuation form block directly.");
}

console.log("\n=== COLORS AND STYLES ===");
// Extract link tags to see where the main CSS is
$('link[rel="stylesheet"]').each((i, el) => {
    console.log("CSS Link: ", $(el).attr('href'));
});

// Inline styles
let inlineColors = new Set();
$('[style]').each((i, el) => {
    const style = $(el).attr('style');
    const colorMatches = style.match(/(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/g);
    if (colorMatches) {
        colorMatches.forEach(c => inlineColors.add(c));
    }
});
console.log("Inline colors found:", Array.from(inlineColors).join(', '));
