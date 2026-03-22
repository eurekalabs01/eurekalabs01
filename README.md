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
- The detail page reads the `id` from the URL, looks up the lab in `data.js`, and renders title, image, authors, description, and PDF download.
- **No new HTML files needed** when adding labs — just edit `data.js`.
- Images and PDFs currently link to the original `eurekalabs.net` server. To self-host, place files locally and update the `SITE_BASE` constant and paths in `data.js`.

---

## How to Add a Lab

Open `data.js` and add an entry to the `LABS` array:

```js
{
  id:            "my-new-lab",
  oldId:         null,
  title:         "My New Lab Title",
  categories:    ["ai", "quantum"],
  level:         "advanced",
  authors:       "Jane Doe, John Smith",
  description:   "Full description...",
  image:         "/path/to/image.jpg",       // or full URL
  pdf:           "/path/to/manual.pdf",       // or null
  updated:       "2026-03-15",                // or null
  estimatedTime: "2 hours",                   // or null
},
```

## How to Add a Category

Add a key to `CATEGORIES` in `data.js`:

```js
mycategory: { label: "My Category", color: "#336699", bg: "#e8f0f8" },
```

## How to Add a Team Member

Add to the `TEAM` array in `data.js`:

```js
{ name: "Jane Doe", role: "Researcher", affiliation: "MIT" },
```

---

## TODO: Fill in Missing Lab Details

I was able to pull full details (authors, PDF links, dates) for 2 of the 32 labs.
The remaining 30 labs have `// TODO: verify` comments for authors and `null` for
PDF links. To fill these in:

1. Open each lab on `eurekalabs.net/lab/{oldId}` (the `oldId` is in `data.js`)
2. Copy the author names, PDF filename, last update date, and estimated time
3. Update the corresponding fields in `data.js`

The PDF link pattern is: `/lab_manual/{oldId}/{filename}.pdf`

---

## Google Analytics

GA4 is already configured with Measurement ID `G-SVHM47HLQ2` in both
`index.html` and `lab.html`. No changes needed unless you want a different property.

---

## Deploy to GitHub Pages

1. Push all 7 files to a GitHub repo `main` branch.
2. **Settings → Pages → Source: main branch, / (root)**
3. Site goes live at `https://your-repo.github.io` or your custom domain.

## Test Locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

---

## Credits

Built for the Eureka Labs project at Miami University.
Supported in part by the National Science Foundation.
