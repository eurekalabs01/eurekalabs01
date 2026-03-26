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


// --- Filter State -----------------------------------------------------------

let activeCat   = "all";
let activeLevel = "all";


// --- Filters ----------------------------------------------------------------

function buildFilters() {
  const catEl   = document.getElementById("cat-filters");
  const levelEl = document.getElementById("level-filters");

  let catHTML = '<button class="filter-btn" aria-pressed="true" data-cat="all">All</button>';
  Object.keys(CATEGORIES).forEach(function(id) {
    catHTML += '<button class="filter-btn" aria-pressed="false" data-cat="' + id + '">' + esc(CATEGORIES[id].label) + '</button>';
  });
  catEl.innerHTML = catHTML;

  let levelHTML = '<button class="filter-btn" aria-pressed="true" data-level="all">All</button>';
  Object.keys(LEVELS).forEach(function(lvl) {
    levelHTML += '<button class="filter-btn" aria-pressed="false" data-level="' + lvl + '">' + esc(LEVELS[lvl].label) + '</button>';
  });
  levelEl.innerHTML = levelHTML;

  catEl.addEventListener("click", function(e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    catEl.querySelectorAll(".filter-btn").forEach(function(b) { b.setAttribute("aria-pressed", "false"); });
    btn.setAttribute("aria-pressed", "true");
    renderLabs();
  });

  levelEl.addEventListener("click", function(e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeLevel = btn.dataset.level;
    levelEl.querySelectorAll(".filter-btn").forEach(function(b) { b.setAttribute("aria-pressed", "false"); });
    btn.setAttribute("aria-pressed", "true");
    renderLabs();
  });
}


// --- Lab List ---------------------------------------------------------------

function renderLabs() {
  const filtered = LABS.filter(function(lab) {
    const catOk   = activeCat   === "all" || lab.categories.indexOf(activeCat) !== -1;
    const levelOk = activeLevel === "all" || lab.level === activeLevel;
    return catOk && levelOk;
  });

  const listEl  = document.getElementById("labs-list");
  const countEl = document.getElementById("labs-count");
  const emptyEl = document.getElementById("no-results");

  countEl.textContent = filtered.length + " lab" + (filtered.length !== 1 ? "s" : "");

  if (filtered.length === 0) {
    listEl.classList.add("hidden");
    emptyEl.style.display = "block";
    return;
  }

  listEl.classList.remove("hidden");
  emptyEl.style.display = "none";

  listEl.innerHTML = filtered.map(function(lab) {
    const catTags = lab.categories.map(function(catId) {
      const c = CATEGORIES[catId] || { label: catId, color: "#666", bg: "#eee" };
      return tagHTML(c.label, c.color, c.bg);
    }).join("");

    const lv = LEVELS[lab.level] || { label: lab.level, color: "#666", bg: "#eee" };
    const lvTag = tagHTML(lv.label, lv.color, lv.bg);

    const thumbHTML = lab.image
      ? '<img class="lab-thumb" src="' + esc(lab.image) + '" alt="">'
      : '<div class="lab-thumb"></div>';

    return '<a class="lab-row" href="lab.html?id=' + encodeURIComponent(lab.id) + '">' +
      thumbHTML +
      '<div><h3>' + esc(lab.title) + '</h3></div>' +
      '<div class="tags">' + catTags + lvTag + '</div>' +
      '<div class="arrow">\u2192</div>' +
    '</a>';
  }).join("");
}


// --- Team -------------------------------------------------------------------

function renderTeam() {
  const grid = document.getElementById("team-grid");
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
