A lightweight, high-performance, production-ready landing page for GMK Engineering Solutions. Built using clean, semantic HTML5, modern responsive CSS3, and vanilla JavaScript. The site requires no build steps, preprocessors, node modules, or external framework dependencies, making it lightning-fast to load, trivial to maintain, and instantly deployable to any web hosting environment.

📂 Project Structure

text
├── index.html          # Main landing page (Services, Projects, Catalogue & Contact Form)
├── css/                # Clean stylesheets for layouts, typography, and responsive breaks
├── js/
│   └── main.js         # Vanilla JS form validation and WhatsApp redirect logic
├── images/             # UI icons, factory showcase images, and structural graphics
│   └── catalogue/      # Showcase directory containing 5 product illustration placeholders
└── standalone/
    └── index.html      # Self-contained mirror file with all assets embedded as Base64 Data URIs
Use code with caution.

🚀 Deployment & Web Hosting


Standard Production Deployment

Simply upload the root directory files directly to your web server’s root folder (e.g., public_html via cPanel or HostPinnacle File Manager).
Because it is a pure static site with no backend dependencies, it can also be hosted for free with continuous integration via:
• Cloudflare Pages (Highly recommended; point it directly to your GitHub repository)
• Netlify / Vercel (Drag-and-drop the folder or connect via Git)
• GitHub Pages (Deploy straight from your main branch)

Standalone Production File

The single file inside standalone/ compiles the entire layout, styles, scripts, and graphical assets into one document. This allows you to share a complete, interactive preview with clients via email, run offline demonstrations, or host a backup single-file mirror.

🔧 Core Configurations & Customization


1. Changing the WhatsApp Enquiry Routing Number

The interactive contact form captures client inputs (Full Name, Company, Phone, Service Needed, and Project Details) and dynamically bundles them into a clean, readable text string.
To change the destination number where enquiries are sent:
1. Open js/main.js.
2. Locate the recipient configuration variable holding the primary number (+254 727 944 692).
3. Replace it with your active number. Important: Format the number as a continuous string of digits using the international country code format without spaces or leading plus symbols (e.g., 254727944692).
4. Save your changes.

2. Upgrading Catalogue Placeholders to Real Product Photos

The site features a specialized milling spares section displaying 5 core product groups. Currently, these display vector illustrations marked as placeholders. To transition them to real product photographs:
1. Save your true production photos into the images/catalogue/ folder.
2. Open index.html and search for the respective catalogue list items:
	• 01 / 05: Plansifter Metal Mesh (SEFAR NYTAL / Stainless options)
	• 02 / 05: Purifier Components (Bühler MQR F compatible covers/brushes)
	• 03 / 05: Dust Filter Bags (Top-loader / Side-loader variants)
	• 04 / 05: Centrifugal Sifters (Turbo & Vibro sifter setups)
	• 05 / 05: Milling Accessories (Sieve cleaners, polyballs, flour spatulas)
3. Update the src attribute of the corresponding <img> tag to point to your new filename:html
<!-- Change this placeholder: -->
<img src="images/catalogue/plansifter-mesh-placeholder.jpg" alt="Plansifter Metal Mesh">

<!-- To your live product photo: -->
<img src="images/catalogue/real-plansifter-mesh.jpg" alt="Plansifter Metal Mesh">
Use code with caution.
4. Remove the illustration warning flag: Completely delete the following line immediately beneath the image tag to clear the illustrative subtitle from the front end:html
<figcaption>Illustrative image</figcaption>
Use code with caution.

3. Updating Hardcoded "Get a Quote" Links

The individual quick-quote buttons distributed under each item product list link directly to WhatsApp chat threads. You can modify their baseline text payload or swap them out entirely for direct anchor links (<a href="https://wa.me...">) right within the structural markup of index.html.

🎨 Specifications & Legal Credits

• Typography: Clean, premium sans-serif typography pulled dynamically via the Google Fonts API.
• Trademarks: SEFAR NYTAL and Bühler MQR F are registered names of their respective brand owners and are included on this landing page layout solely for identifying item compatibility.
