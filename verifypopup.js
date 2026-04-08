const fs = require('fs');
const path = require('path');

// Folder containing your HTML pages
const folderPath = path.join(__dirname, 'pages'); // change if needed

// List of all HTML pages to check
const pages = [
  "1000lumen-led-lantern.html",
  "100w.-solar-panel-.html",
  "120db-survival-whistle.html",
  "201-water-bladder.html",
  "5501-paranoid-bracelet.html",
  "Emergency-Mylar-Survival-Blanket.html",
  "LifeStream-Portable-Water-Filter.html",
  "MagSafeHub.html",
  "Portable-Power-Banks.html",
  "StormReadyHub.html",
  "aliexpress-shop.html",
  "anker-powerhouse-521.html",
  "aquacurve-irrigation.html",
  "cat-nail-scratch-board-.html",
  "chargingstation.html",
  "chuwi-corebook-x.html",
  "electrick-bike.html",
  "elite-72hr-survival-kit.html",
  "emergency-cooking-stove.html",
  "emergency-hot-tub.html",
  "emergency-lantern.html",
  "emergency-light.html",
  "emergency-water-generator.html",
  "emergencyfoodkit.html",
  "ferro-rod-firestarter.html",
  "flexrelief-fascia-ring.html",
  "gan.html",
  "god-pocket-laptop.html",
  "hermes-picotin-lock.html",
  "index.html",
  "jackery-explorer-300.html",
  "jerry-can-lifesaver.html",
  "kindlebooks.html",
  "lifestraw-water-filter.html",
  "loropiana-shyanne-dress.html",
  "lv-neverfull-mm.html",
  "magasafe.html",
  "massage-chair.html",
  "mini-multitool.html",
  "mllse-mini-pc.html",
  "mylar-blanket.html",
  "nanomist-gun.html",
  "nasa-mylar-blanket.html",
  "patek-nautilus--5711.htmll",
  "poco-f7-phone.html",
  "posturepro-corrector.html",
  "powerbank-30000mah.html",
  "ptz-security-camera.html",
  "rolex-daytona-panda.html",
  "sany-sy215-excavator.html",
  "sargeant-power-bank.html",
  "satellite-phone.html",
  "shop.html",
  "signal-mirror.html",
  "sitemap.xml",
  "solar-generator-kit.html",
  "survival-kit.html",
  "survival-seed-bank.html",
  "tank-4-pro-phone.html",
  "titanium-cookware.html",
  "weather-radio-4000mah.html",
  "wireless-dog-fence.html"
];

// Loop through pages
pages.forEach(file => {
  const filePath = path.join(folderPath, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Missing file: ${file}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  const popupExists = content.includes('id="exitPopup"') ? '✅' : '❌ missing';
  const scriptExists = content.includes('popup.js') ? '✅' : '❌ missing';
  
  console.log(`${file}: popup=${popupExists}, script=${scriptExists}`);
});

console.log('✅ Verification complete.');
