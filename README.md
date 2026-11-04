# GMK Engineering landing page

- `index.html` + `css/` + `js/` + `images/`: the editable site. Open index.html in a browser or upload the whole folder to any host (Netlify, cPanel, etc.).
- `standalone/`: the same page as one self-contained file with images embedded.

No build step or dependencies. Fonts load from Google Fonts. The enquiry form opens WhatsApp (+254 727 944 692); change the number in `js/main.js`.

## Catalogue photos
The five catalogue images in `images/catalogue/` are illustrations (marked on the page). To use real photos, save them in that folder, point each `<img src>` in `index.html` at the new file, and delete the `<figcaption>Illustrative image</figcaption>` line. Quote buttons are plain WhatsApp links in `index.html`.
