// ============================================================================
//  EUREKA LABS — SHARED UTILITIES
//  Loaded by both index.html and lab.html before app.js / lab-app.js.
// ============================================================================

function esc(str) {
  const el = document.createElement("span");
  el.textContent = (str == null) ? "" : str;
  return el.innerHTML;
}

function tagHTML(label, color, bg) {
  return '<span class="tag" style="--tag-bg:' + bg + ';--tag-color:' + color + '">' + esc(label) + '</span>';
}
