const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const DOMAIN = 'https://softlifetravel.com'; // Replace with your actual domain
const SITEMAP_FILE = 'sitemap.xml';
const EXCLUDE_FILES = ['index.html', '404.html']; // index.html is handled separately
// ---------------------

const generateSitemap = () => {
    try {
        const files = fs.readdirSync('./');
        
        // Filter for .html files and exclude scripts/configs
        const pages = files.filter(file => {
            return file.endsWith('.html') && 
                   !EXCLUDE_FILES.includes(file) &&
                   !file.startsWith('_'); // Excludes partials or hidden files
        });

        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // 1. Add the Homepage (Priority 1.0)
        xml += `  <url>\n    <loc>${DOMAIN}/</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <priority>1.0</priority>\n  </url>\n`;

        // 2. Add all other detected pages (Priority 0.8)
        pages.forEach(page => {
            xml += `  <url>\n`;
            xml += `    <loc>${DOMAIN}/${page}</loc>\n`;
            xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;
        });

        xml += `</urlset>`;

        fs.writeFileSync(SITEMAP_FILE, xml);
        console.log(`🚀 Success! sitemap.xml generated with ${pages.length + 1} total URLs.`);
        
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
    }
};

generateSitemap();
