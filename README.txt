# Bazzio E‑commerce Starter (Static HTML/CSS/JS)

Folder layout:
.
├── index.html          # Landing page
├── products.html       # Catalog with search & category filter
├── contact.html        # Contact form (front‑end only)
└── assets
    ├── css/styles.css
    ├── js/main.js
    └── images/bazzio-logo.jpg

How to host:
1) Upload the entire **bazzio-site** folder to your hosting (cPanel, GoDaddy, Netlify, Vercel, GitHub Pages, etc.).
2) Ensure your domain points to the folder where **index.html** lives.
3) You can rename the folder to anything (e.g., `public_html`) as long as index.html is at the web root.
4) To add real checkout/payments later, connect a backend or a service like Razorpay/Stripe and wire the “Add to Cart” actions.
