// ============================================================================
//
//  EUREKA LABS — HOME PAGE RENDERING (app.js)
//
//  Reads data from data.js and renders the home page:
//  filters, lab catalog list, and team grid.
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


// --- Filter State -----------------------------------------------------------

var activeCat   = "all";
var activeLevel = "all";


// --- Filters ----------------------------------------------------------------

function buildFilters() {
  var catEl   = document.getElementById("cat-filters");
  var levelEl = document.getElementById("level-filters");

  var catHTML = '<button class="filter-btn" aria-pressed="true" data-cat="all">All</button>';
  for (var id in CATEGORIES) {
    if (CATEGORIES.hasOwnProperty(id)) {
      catHTML += '<button class="filter-btn" aria-pressed="false" data-cat="' + id + '">' + esc(CATEGORIES[id].label) + '</button>';
    }
  }
  catEl.innerHTML = catHTML;

  var levelHTML = '<button class="filter-btn" aria-pressed="true" data-level="all">All</button>';
  for (var lvl in LEVELS) {
    if (LEVELS.hasOwnProperty(lvl)) {
      levelHTML += '<button class="filter-btn" aria-pressed="false" data-level="' + lvl + '">' + esc(LEVELS[lvl].label) + '</button>';
    }
  }
  levelEl.innerHTML = levelHTML;

  catEl.addEventListener("click", function(e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    catEl.querySelectorAll(".filter-btn").forEach(function(b) { b.setAttribute("aria-pressed", "false"); });
    btn.setAttribute("aria-pressed", "true");
    renderLabs();
  });

  levelEl.addEventListener("click", function(e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeLevel = btn.dataset.level;
    levelEl.querySelectorAll(".filter-btn").forEach(function(b) { b.setAttribute("aria-pressed", "false"); });
    btn.setAttribute("aria-pressed", "true");
    renderLabs();
  });
}


// --- Lab List ---------------------------------------------------------------

function renderLabs() {
  var filtered = LABS.filter(function(lab) {
    var catOk   = activeCat   === "all" || lab.categories.indexOf(activeCat) !== -1;
    var levelOk = activeLevel === "all" || lab.level === activeLevel;
    return catOk && levelOk;
  });

  var listEl  = document.getElementById("labs-list");
  var countEl = document.getElementById("labs-count");
  var emptyEl = document.getElementById("no-results");

  countEl.textContent = filtered.length + " lab" + (filtered.length !== 1 ? "s" : "");

  if (filtered.length === 0) {
    listEl.style.display = "none";
    emptyEl.style.display = "block";
    return;
  }

  listEl.style.display = "flex";
  emptyEl.style.display = "none";

  listEl.innerHTML = filtered.map(function(lab) {
    var catTags = lab.categories.map(function(catId) {
      var c = CATEGORIES[catId] || { label: catId, color: "#666", bg: "#eee" };
      return tagHTML(c.label, c.color, c.bg);
    }).join("");

    var lv = LEVELS[lab.level] || { label: lab.level, color: "#666", bg: "#eee" };
    var lvTag = tagHTML(lv.label, lv.color, lv.bg);

    return '<a class="lab-row" href="lab.html?id=' + encodeURIComponent(lab.id) + '">' +
      '<div><h3>' + esc(lab.title) + '</h3></div>' +
      '<div class="tags">' + catTags + lvTag + '</div>' +
      '<div class="arrow">\u2192</div>' +
    '</a>';
  }).join("");
}


// --- Team -------------------------------------------------------------------

function renderTeam() {
  var grid = document.getElementById("team-grid");
  grid.innerHTML = TEAM.map(function(m) {
    return '<div class="team-member">' +
      '<div class="team-avatar">' + esc(m.name.charAt(0)) + '</div>' +
      '<h4>' + esc(m.name) + '</h4>' +
      '<div class="role">' + esc(m.role) + '</div>' +
      '<div class="affil">' + esc(m.affiliation) + '</div>' +
    '</div>';
  }).join("");
}


// --- Init -------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  buildFilters();
  renderLabs();
  renderTeam();
});
