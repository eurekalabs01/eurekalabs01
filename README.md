# Eureka Labs Website

A static website for the Eureka Labs cybersecurity education platform.  
Hosted on GitHub Pages. No build step required.

---

## File Structure

```
index.html    — Home page (hero, about, lab catalog, team)
lab.html      — Lab detail page template (shared by all labs)
style.css     — All visual styles (shared across pages)
data.js       — All site content (labs, team, categories, levels)
app.js        — Home page rendering logic
lab-app.js    — Lab detail page rendering logic
README.md     — This file
```

**For day-to-day updates, you only need to edit `data.js`.**

---

## How It Works

- The **home page** (`index.html`) shows a filterable catalog of all labs.
- Clicking a lab opens its **detail page** (`lab.html?id=some-lab-id`).
- The detail page is a single template that reads the `id` from the URL,
  looks up the matching lab in `data.js`, and renders the content.
- **No new HTML files are needed** when adding labs — just edit `data.js`.

---

## How to Add a Lab

Open `data.js` and add an entry to the `LABS` array:

```js
{
  id:          "my-new-lab",                // URL slug (lowercase, hyphens, unique)
  title:       "My New Lab Title",
  categories:  ["ai", "quantum"],           // can list multiple
  level:       "advanced",                  // must match a key in LEVELS
  description: "Full description of what the lab covers...",
  objectives:  [                            // optional
    "First learning objective",
    "Second learning objective",
  ],
  resources:   [                            // optional — shown as links
    { label: "Lab Manual (PDF)", url: "https://example.com/manual.pdf" },
    { label: "GitHub Repository", url: "https://github.com/..." },
  ],
  authors:     ["Jane Doe", "John Smith"],  // optional
  updated:     "2026-03-15",                // optional
},
```

**Notes:**
- The `id` must be unique and URL-safe (lowercase letters, numbers, hyphens).
- `objectives`, `resources`, `authors`, and `updated` are all optional.
  If omitted, those sections simply won't appear on the lab page.
- Labs appear on the home page in the order listed in the array.

---

## How to Add a Category

Open `data.js` and add a key to the `CATEGORIES` object:

```js
mycategory: {
  label: "My Category",    // display name in filters and tags
  color: "#336699",         // text color for the tag pill (dark shade)
  bg:    "#e8f0f8",         // background color for the tag pill (light tint)
},
```

Then use `"mycategory"` in any lab's `categories` array.

---

## How to Add a Level

Open `data.js` and add a key to the `LEVELS` object:

```js
expert: {
  label: "Expert",
  color: "#993366",
  bg:    "#f5e8f0",
},
```

Then use `"expert"` as the `level` value in any lab entry.

---

## How to Add a Team Member

Open `data.js` and add an entry to the `TEAM` array:

```js
{
  name:        "Jane Doe",
  role:        "Researcher",
  affiliation: "MIT",
},
```

---

## Google Analytics

Both `index.html` and `lab.html` include a Google Analytics 4 (GA4) snippet.

To activate it:

1. Go to [Google Analytics](https://analytics.google.com/) and create a GA4 property.
2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`).
3. In **both** `index.html` and `lab.html`, find the two lines with `G-XXXXXXXXXX`
   and replace them with your actual Measurement ID.

The snippet is in the `<head>` section of each HTML file:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## How to Deploy on GitHub Pages

1. Create a GitHub repository (e.g., `eurekalabs/eurekalabs.github.io`).
2. Push all files to the `main` branch.
3. Go to **Settings → Pages** and set the source to `main` branch, root folder.
4. Your site will be live at `https://eurekalabs.github.io` (or your custom domain).

To update, edit `data.js`, commit, and push. Changes go live within a minute.

---

## How to Test Locally

Since the site loads JavaScript files, you need a local server (not just opening the HTML directly). Run this in the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Custom Domain

1. In your GitHub repo, go to **Settings → Pages → Custom domain**.
2. Enter your domain (e.g., `eurekalabs.net`).
3. At your DNS provider, add a `CNAME` record pointing to `eurekalabs.github.io`.
4. Check "Enforce HTTPS" in the Pages settings.

---

## Editing Styles

All styles live in `style.css`. Design tokens (colors, fonts, spacing) are at the top in `:root`.  
To change the accent color, font, or spacing, start there.

---

## Credits

Built for the Eureka Labs project at Miami University.  
Supported in part by the National Science Foundation.
