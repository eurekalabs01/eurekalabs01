// ============================================================================
//
//  EUREKA LABS — LAB DETAIL PAGE RENDERING (lab-app.js)
//
//  Reads the "id" query parameter from the URL, finds the matching lab
//  in data.js, and renders the lab detail page.
//
//  You should NOT need to edit this file — edit data.js instead.
//
// ============================================================================


// --- Utilities --------------------------------------------------------------

function esc(str) {
  var el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}

function tagHTML(label, color, bg) {
  return '<span class="tag" style="--tag-bg:' + bg + ';--tag-color:' + color + '">' + esc(label) + '</span>';
}


// --- Find Lab by ID ---------------------------------------------------------

function getLabId() {
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findLab(id) {
  for (var i = 0; i < LABS.length; i++) {
    if (LABS[i].id === id) return LABS[i];
  }
  return null;
}


// --- Render Lab Detail Page -------------------------------------------------

function renderLabPage() {
  var id  = getLabId();
  var lab = findLab(id);

  // 404 state
  if (!lab) {
    document.getElementById("lab-content").innerHTML =
      '<div class="lab-not-found">' +
        '<h1>Lab not found</h1>' +
        '<p>The requested lab does not exist. It may have been removed or the URL may be incorrect.</p>' +
        '<a href="index.html" class="btn-primary">Back to all labs</a>' +
      '</div>';
    document.title = "Not Found — Eureka Labs";
    return;
  }

  // Update page title
  document.title = esc(lab.title) + " — Eureka Labs";

  // Build tags
  var tagsHTML = lab.categories.map(function(catId) {
    var c = CATEGORIES[catId] || { label: catId, color: "#666", bg: "#eee" };
    return tagHTML(c.label, c.color, c.bg);
  }).join("");

  var lv = LEVELS[lab.level] || { label: lab.level, color: "#666", bg: "#eee" };
  tagsHTML += tagHTML(lv.label, lv.color, lv.bg);

  // Build objectives list
  var objectivesHTML = "";
  if (lab.objectives && lab.objectives.length > 0) {
    objectivesHTML =
      '<div class="lab-section">' +
        '<h2>Learning objectives</h2>' +
        '<ul class="objectives-list">' +
          lab.objectives.map(function(obj) {
            return '<li>' + esc(obj) + '</li>';
          }).join("") +
        '</ul>' +
      '</div>';
  }

  // Build resources list
  var resourcesHTML = "";
  if (lab.resources && lab.resources.length > 0) {
    resourcesHTML =
      '<div class="lab-section">' +
        '<h2>Resources</h2>' +
        '<ul class="resources-list">' +
          lab.resources.map(function(res) {
            return '<li><a href="' + esc(res.url) + '" target="_blank" rel="noopener">' + esc(res.label) + ' \u2197</a></li>';
          }).join("") +
        '</ul>' +
      '</div>';
  }

  // Build authors
  var authorsHTML = "";
  if (lab.authors && lab.authors.length > 0) {
    authorsHTML =
      '<div class="lab-meta-item">' +
        '<span class="meta-label">Authors</span>' +
        '<span>' + lab.authors.map(esc).join(", ") + '</span>' +
      '</div>';
  }

  // Build updated date
  var updatedHTML = "";
  if (lab.updated) {
    updatedHTML =
      '<div class="lab-meta-item">' +
        '<span class="meta-label">Last updated</span>' +
        '<span>' + esc(lab.updated) + '</span>' +
      '</div>';
  }

  // Build meta bar (authors + date)
  var metaHTML = "";
  if (authorsHTML || updatedHTML) {
    metaHTML = '<div class="lab-meta">' + authorsHTML + updatedHTML + '</div>';
  }

  // Assemble the full page
  document.getElementById("lab-content").innerHTML =
    '<a href="index.html#labs" class="back-link">\u2190 All labs</a>' +

    '<div class="lab-header">' +
      '<div class="tags">' + tagsHTML + '</div>' +
      '<h1>' + esc(lab.title) + '</h1>' +
    '</div>' +

    metaHTML +

    '<div class="lab-section">' +
      '<h2>Overview</h2>' +
      '<p>' + esc(lab.description) + '</p>' +
    '</div>' +

    objectivesHTML +
    resourcesHTML;
}


// --- Init -------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", renderLabPage);
