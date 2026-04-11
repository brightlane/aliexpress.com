const fs = require('fs');
const path = require('path');

const directory = './'; // Current folder

fs.readdir(directory, (err, files) => {
    if (err) return console.error('Unable to scan directory: ' + err);

    files.forEach(file => {
        // Only target .html or the typo .htmll files
        if (file.endsWith('.html') || file.endsWith('.htmll')) {
            
            let newName = file.toLowerCase()               // Fixes Case Sensitivity
                .replace('.htmll', '.html')                // Fixes the .htmll typo
                .replace('paranoid', 'paracord')           // Fixes the "Paranoid" typo
                .replace('expres.html', 'express.html')    // Fixes "Expres"
                .replace(/\.\-/g, '-')                     // Fixes ".-"
                .replace(/\-\./g, '.')                     // Fixes "-."
                .replace(/\-\-+/g, '-')                    // Fixes double dashes "--"
                .trim();

            if (file !== newName) {
                fs.rename(path.join(directory, file), path.join(directory, newName), (err) => {
                    if (err) console.log(`Error renaming ${file}: ${err}`);
                    else console.log(`Renamed: ${file} ➔ ${newName}`);
                });
            }
        }
    });
});
