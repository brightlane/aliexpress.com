const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) return console.error('Error scanning directory: ' + err);

    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(directory, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // 1. Find all href=".html" links and make them lowercase
            let fixedContent = content.replace(/href="([^"]+\.html)"/gi, (match, p1) => {
                return `href="${p1.toLowerCase()}"`;
            });

            // 2. Globally fix the specific spelling/format typos inside the code
            fixedContent = fixedContent
                .replace(/electrick-bike\.html/gi, 'electric-bike.html')
                .replace(/patek-nautilus--5711\.html/gi, 'patek-nautilus-5711.html')
                .replace(/5501-paranoid-bracelet\.html/gi, '5501-paracord-bracelet.html');

            if (content !== fixedContent) {
                fs.writeFileSync(filePath, fixedContent);
                console.log(`Updated internal links in: ${file}`);
            }
        }
    });
    console.log('Site-wide link repair complete.');
});
