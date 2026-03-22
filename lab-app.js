// ============================================================================
//
//  EUREKA LABS — LAB DETAIL PAGE RENDERING (lab-app.js)
//
//  Reads the "id" query parameter, finds the matching lab in data.js,
//  and renders the lab detail page with image, authors, PDF download,
//  and metadata.
//
//  You should NOT need to edit this file — edit data.js instead.
//
// ============================================================================


function esc(str) {
  var el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}

function tagHTML(label, color, bg) {
  return '<span class="tag" style="--tag-bg:' + bg + ';--tag-color:' + color + '">' + esc(label) + '</span>';
}


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
    document.title = "Not Found \u2014 Eureka Labs";
    return;
  }

  // Update page title
  document.title = lab.title + " \u2014 Eureka Labs";
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", lab.title + " \u2014 " + lab.description.substring(0, 150));
  }

  // Tags
  var tagsHTML = lab.categories.map(function(catId) {
    var c = CATEGORIES[catId] || { label: catId, color: "#666", bg: "#eee" };
    return tagHTML(c.label, c.color, c.bg);
  }).join("");
  var lv = LEVELS[lab.level] || { label: lab.level, color: "#666", bg: "#eee" };
  tagsHTML += tagHTML(lv.label, lv.color, lv.bg);

  // Image
  var imageHTML = "";
  if (lab.image) {
    imageHTML = '<div class="lab-image"><img src="' + esc(lab.image) + '" alt="' + esc(lab.title) + '"></div>';
  }

  // Metadata bar
  var metaItems = [];
  if (lab.authors) {
    metaItems.push('<div class="lab-meta-item"><span class="meta-label">Authors</span><span>' + esc(lab.authors) + '</span></div>');
  }
  if (lab.updated) {
    metaItems.push('<div class="lab-meta-item"><span class="meta-label">Last updated</span><span>' + esc(lab.updated) + '</span></div>');
  }
  if (lab.estimatedTime) {
    metaItems.push('<div class="lab-meta-item"><span class="meta-label">Estimated time</span><span>' + esc(lab.estimatedTime) + '</span></div>');
  }
  var metaHTML = metaItems.length > 0 ? '<div class="lab-meta">' + metaItems.join("") + '</div>' : "";

  // PDF download button
  var pdfHTML = "";
  if (lab.pdf) {
    pdfHTML =
      '<div class="lab-section">' +
        '<h2>Lab manual</h2>' +
        '<a href="' + esc(lab.pdf) + '" target="_blank" rel="noopener" class="btn-primary">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><path d="M3 14h10M8 2v9M4 7l4 4 4-4"/></svg>' +
          'Download PDF' +
        '</a>' +
      '</div>';
  }

  // Resources list (optional extra links)
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

  // Assemble
  document.getElementById("lab-content").innerHTML =
    '<a href="index.html#labs" class="back-link">\u2190 All labs</a>' +
    '<div class="lab-header">' +
      '<div class="tags">' + tagsHTML + '</div>' +
      '<h1>' + esc(lab.title) + '</h1>' +
    '</div>' +
    metaHTML +
    imageHTML +
    '<div class="lab-section">' +
      '<h2>Overview</h2>' +
      '<p>' + esc(lab.description) + '</p>' +
    '</div>' +
    pdfHTML +
    resourcesHTML;
}


document.addEventListener("DOMContentLoaded", renderLabPage);
