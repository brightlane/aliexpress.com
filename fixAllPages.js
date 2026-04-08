const fs = require('fs');
const path = require('path');

// Folder containing your HTML pages
const folderPath = path.join(__dirname, 'pages'); // change if needed

// Expected files and product titles
const pages = [
  {file: "1000lumen-led-lantern.html", title: "1000 Lumen LED Lantern"},
  {file: "100w.-solar-panel-.html", title: "100W Solar Panel"},
  {file: "120db-survival-whistle.html", title: "120dB Survival Whistle"},
  {file: "201-water-bladder.html", title: "201 Water Bladder"},
  {file: "5501-paranoid-bracelet.html", title: "5501 Paranoid Bracelet"},
  {file: "Emergency-Mylar-Survival-Blanket.html", title: "Emergency Mylar Survival Blanket"},
  {file: "LifeStream-Portable-Water-Filter.html", title: "LifeStream Portable Water Filter"},
  {file: "MagSafeHub.html", title: "MagSafe Hub"},
  {file: "Portable-Power-Banks.html", title: "Portable Power Banks"},
  {file: "StormReadyHub.html", title: "StormReady Hub"},
  {file: "aliexpress-shop.html", title: "Aliexpress Shop"},
  {file: "anker-powerhouse-521.html", title: "Anker Powerhouse 521"},
  {file: "aquacurve-irrigation.html", title: "Aquacurve Irrigation"},
  {file: "cat-nail-scratch-board-.html", title: "Cat Nail Scratch Board"},
  {file: "chargingstation.html", title: "Charging Station"},
  {file: "chuwi-corebook-x.html", title: "Chuwi Corebook X"},
  {file: "electrick-bike.html", title: "Electrick Bike"},
  {file: "elite-72hr-survival-kit.html", title: "Elite 72hr Survival Kit"},
  {file: "emergency-cooking-stove.html", title: "Emergency Cooking Stove"},
  {file: "emergency-hot-tub.html", title: "Emergency Hot Tub"},
  {file: "emergency-lantern.html", title: "Emergency Lantern"},
  {file: "emergency-light.html", title: "Emergency Light"},
  {file: "emergency-water-generator.html", title: "Emergency Water Generator"},
  {file: "emergencyfoodkit.html", title: "Emergency Food Kit"},
  {file: "ferro-rod-firestarter.html", title: "Ferro Rod Firestarter"},
  {file: "flexrelief-fascia-ring.html", title: "FlexRelief Fascia Ring"},
  {file: "gan.html", title: "Gan"},
  {file: "god-pocket-laptop.html", title: "God Pocket Laptop"},
  {file: "hermes-picotin-lock.html", title: "Hermes Picotin Lock"},
  {file: "index.html", title: "Home"},
  {file: "jackery-explorer-300.html", title: "Jackery Explorer 300"},
  {file: "jerry-can-lifesaver.html", title: "Jerry Can Lifesaver"},
  {file: "kindlebooks.html", title: "Kindle Books"},
  {file: "lifestraw-water-filter.html", title: "LifeStraw Water Filter"},
  {file: "loropiana-shyanne-dress.html", title: "Loropiana Shyanne Dress"},
  {file: "lv-neverfull-mm.html", title: "LV Neverfull MM"},
  {file: "magasafe.html", title: "MagSafe"},
  {file: "massage-chair.html", title: "Massage Chair"},
  {file: "mini-multitool.html", title: "Mini Multitool"},
  {file: "mllse-mini-pc.html", title: "MLLSE Mini PC"},
  {file: "mylar-blanket.html", title: "Mylar Blanket"},
  {file: "nanomist-gun.html", title: "Nanomist Gun"},
  {file: "nasa-mylar-blanket.html", title: "NASA Mylar Blanket"},
  {file: "patek-nautilus--5711.htmll", title: "Patek Nautilus 5711"},
  {file: "poco-f7-phone.html", title: "Poco F7 Phone"},
  {file: "posturepro-corrector.html", title: "PosturePro Corrector"},
  {file: "powerbank-30000mah.html", title: "PowerBank 30000mAh"},
  {file: "ptz-security-camera.html", title: "PTZ Security Camera"},
  {file: "rolex-daytona-panda.html", title: "Rolex Daytona Panda"},
  {file: "sany-sy215-excavator.html", title: "SANY SY215 Excavator"},
  {file: "sargeant-power-bank.html", title: "Sargeant Power Bank"},
  {file: "satellite-phone.html", title: "Satellite Phone"},
  {file: "shop.html", title: "Shop"},
  {file: "signal-mirror.html", title: "Signal Mirror"},
  {file: "sitemap.xml", title: "Sitemap"},
  {file: "solar-generator-kit.html", title: "Solar Generator Kit"},
  {file: "survival-kit.html", title: "Ultimate Survival Kit"},
  {file: "survival-seed-bank.html", title: "Survival Seed Bank"},
  {file: "tank-4-pro-phone.html", title: "Tank 4 Pro Phone"},
  {file: "titanium-cookware.html", title: "Titanium Cookware"},
  {file: "weather-radio-4000mah.html", title: "Weather Radio 4000mAh"},
  {file: "wireless-dog-fence.html", title: "Wireless Dog Fence"}
];

// Loop through each page
pages.forEach(page => {
  const filePath = path.join(folderPath, page.file);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Missing file: ${page.file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // 1️⃣ Check <h1>
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (!h1Match) {
    console.log(`⚠️ Missing <h1> in ${page.file}`);
  } else if (h1Match[1].trim() !== page.title) {
    console.log(`⚠️ <h1> mismatch in ${page.file}: found "${h1Match[1].trim()}", expected "${page.title}"`);
  }

  // 2️⃣ Ensure exitPopup div exists
  const popupMatches = content.match(/id=["']exitPopup["']/g) || [];
  if (popupMatches.length === 0) {
    console.log(`ℹ️ Adding missing exitPopup div to ${page.file}`);
    const popupDiv = '\n<div class="popup" id="exitPopup" style="display:none;"><span>Wait! Don’t leave without checking our special offer!</span></div>\n';
    content = content.replace(/<\/body>/i, popupDiv + '</body>');
    updated = true;
  }

  // 3️⃣ Ensure popup.js script is included
  if (!/popup\.js/.test(content)) {
    console.log(`ℹ️ Injecting popup.js script into ${page.file}`);
    const scriptTag = '\n<script src="popup.js"></script>\n';
    content = content.replace(/<\/body>/i, scriptTag + '</body>');
    updated = true;
  }

  // 4️⃣ Save updated file
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${page.file}`);
  }
});

console.log('✅ All pages processed with popup.js injection.');
