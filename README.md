# Eureka Labs Website

A static website for the Eureka Labs cybersecurity education platform.
Hosted on GitHub Pages. No build step required.

---

## File Structure

```
index.html          — Home page (hero, about, lab catalog, team)
lab.html            — Lab detail page template (shared by all labs)
style.css           — All visual styles (shared across pages)
data.js             — All site content (labs, team, categories, levels)
app.js              — Home page rendering logic
lab-app.js          — Lab detail page rendering logic
download-labs.sh    — Script to download PDFs & images from eurekalabs.net
README.md           — This file

labs/               — Lab content folder (one subfolder per lab)
  wep-passive/
    eavesdropping.jpg       — Lab thumbnail image
    WepCrackBasic.pdf       — Lab manual PDF
    (any other materials)
  wep-active/
    inject.jpg
    WepCrackAdvanced.pdf
  wpa-handshake/
    ...
```

**For day-to-day content updates, you only need to edit `data.js`.**

---

## Initial Setup

### 1. Download lab files from the original site

The `download-labs.sh` script creates the `labs/` folder structure and
downloads all 32 lab PDFs and images from `eurekalabs.net`:

```bash
chmod +x download-labs.sh
./download-labs.sh
```

This creates 32 subfolders under `labs/`, each containing the lab's image and
PDF manual. You only need to run this once.

### 2. Test locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

### 3. Deploy to GitHub Pages

Push all files (including the `labs/` folder) to your repo's `main` branch:

```bash
git add .
git commit -m "Initial site with all labs"
git push
```

Go to **Settings → Pages → Source: main branch, / (root)**.

---

## How to Add a Lab

1. **Create the folder**: `labs/my-new-lab/`
2. **Add files**: Put the PDF manual, image, and any other materials in the folder
3. **Edit `data.js`**: Add an entry to the `LABS` array:

```js
{
  id:            "my-new-lab",
  title:         "My New Lab Title",
  categories:    ["ai", "quantum"],    // can list multiple
  level:         "advanced",           // must match a key in LEVELS
  authors:       "Jane Doe, John Smith",
  description:   "Full description...",
  image:         "labs/my-new-lab/thumbnail.jpg",
  pdf:           "labs/my-new-lab/manual.pdf",
  updated:       "2026-03-15",
  estimatedTime: "2 hours",
},
```

4. **Commit and push** — the new lab appears automatically.

### Adding extra materials to a lab

Just put them in the lab's folder. You can then add links using the optional
`resources` field in `data.js`:

```js
resources: [
  { label: "Starter Code (GitHub)", url: "https://github.com/..." },
  { label: "Dataset (CSV)",         url: "labs/my-new-lab/dataset.csv" },
],
```

---

## How to Add a Category

Add a key to `CATEGORIES` in `data.js`:

```js
mycategory: { label: "My Category", color: "#336699", bg: "#e8f0f8" },
```

Then use `"mycategory"` in any lab's `categories` array.

---

## How to Add a Level

Add a key to `LEVELS` in `data.js`:

```js
expert: { label: "Expert", color: "#993366", bg: "#f5e8f0" },
```

---

## How to Add a Team Member

Add to the `TEAM` array in `data.js`:

```js
{ name: "Jane Doe", role: "Researcher", affiliation: "MIT" },
```

---

## Google Analytics

GA4 is configured with Measurement ID `G-SVHM47HLQ2` in both
`index.html` and `lab.html`. No changes needed unless you want
a different property.

---

## Custom Domain

1. In your repo, go to **Settings → Pages → Custom domain**
2. Enter `eurekalabs.net`
3. Add a `CNAME` record at your DNS provider pointing to `your-username.github.io`
4. Check "Enforce HTTPS"

---

## Credits

Built for the Eureka Labs project at Miami University.
Supported in part by the National Science Foundation.
