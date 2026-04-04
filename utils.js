// ============================================================================
//  EUREKA LABS — SHARED UTILITIES
//  Loaded by both index.html and lab.html before app.js / lab-app.js.
// ============================================================================

// XSS-safe HTML escape — always use this before inserting user/data strings into HTML.
function esc(str) {
  const el = document.createElement("span");
  el.textContent = (str == null) ? "" : str;
  return el.innerHTML;
}

function tagHTML(label, color, bg) {
  return '<span class="tag" style="--tag-bg:' + bg + ';--tag-color:' + color + '">' + esc(label) + '</span>';
}

// Builds all category + level tag HTML for a lab entry.
// Used by both app.js (catalog list) and lab-app.js (detail page).
function labTagsHTML(lab) {
  const catTags = lab.categories.map(function(catId) {
    const c = CATEGORIES[catId] || { label: catId, color: "#666", bg: "#eee" };
    return tagHTML(c.label, c.color, c.bg);
  }).join("");
  const lv = LEVELS[lab.level] || { label: lab.level, color: "#666", bg: "#eee" };
  return catTags + tagHTML(lv.label, lv.color, lv.bg);
}

// Auto-update copyright year in footer (both pages share this footer element).
document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("copyright-year");
  if (el) el.textContent = new Date().getFullYear();
});
