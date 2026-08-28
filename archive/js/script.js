// Web Development Study Archive - script.js

var currentFilter = 'all';
var currentSearch = '';

var grid         = document.getElementById('projectGrid');
var noResults    = document.getElementById('noResults');
var resultsCount = document.getElementById('resultsCount');
var searchInput  = document.getElementById('searchInput');
var filterBtns   = document.querySelectorAll('.filter-btn');
var modalOverlay = document.getElementById('modalOverlay');
var modalClose   = document.getElementById('modalClose');
var modalContent = document.getElementById('modalContent');
var navHeader    = document.getElementById('navHeader');
var navToggle    = document.getElementById('navToggle');
var navLinks     = document.getElementById('navLinks');
var navLinkItems = document.querySelectorAll('.nav-link[data-section]');
var filterNavBtns= document.querySelectorAll('.filter-nav');

var difficultyLabel = { beginner: '초급', intermediate: '중급', advanced: '고급' };
var difficultyClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' };

function techBadgeClass(tech) {
  var t = tech.toLowerCase().replace(/[^a-z]/g, '');
  var map = { html: 'badge-html', css: 'badge-css', javascript: 'badge-js', js: 'badge-js', gsap: 'badge-gsap', swiper: 'badge-swiper', tailwind: 'badge-tailwind', project: 'badge-project' };
  return map[t] || 'badge-html';
}

function createCard(p, index) {
  var card = document.createElement('article');
  card.className = 'project-card';
  card.style.animationDelay = (index * 0.03) + 's';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', p.title + ' 상세 보기');
  card.dataset.id = p.id;
  var techTags = p.technologies.map(function(t) { return '<span class="tech-tag">' + t + '</span>'; }).join('');
  var previewBtn = p.canPreview ? '<a class="card-action" href="' + p.previewPath + '" target="_blank" rel="noopener noreferrer">미리보기</a>' : '';
  card.innerHTML = '<div class="card-top"><span class="card-num">' + p.num + '</span><div class="card-badges"><span class="badge badge-' + p.category + '">' + p.category.toUpperCase() + '</span></div></div><div class="card-folder">' + p.folder + '</div><h3 class="card-title">' + p.title + '</h3><p class="card-desc">' + p.description + '</p><div class="card-techs">' + techTags + '</div><div class="card-footer"><button class="card-action primary" data-action="detail" data-id="' + p.id + '">상세 보기</button>' + previewBtn + '<span class="difficulty-dot ' + difficultyClass[p.difficulty] + '" title="' + difficultyLabel[p.difficulty] + '"></span></div>';
  card.addEventListener('click', function(e) { if (!e.target.closest('a')) openModal(p.id); });
  card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p.id); } });
  return card;
}

function getFiltered() {
  return projects.filter(function(p) {
    var matchFilter = currentFilter === 'all' || p.category === currentFilter;
    if (!matchFilter) return false;
    if (!currentSearch) return true;
    var q = currentSearch.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.folder.toLowerCase().includes(q) || p.file.toLowerCase().includes(q) || p.technologies.some(function(t) { return t.toLowerCase().includes(q); }) || p.keyConcepts.some(function(k) { return k.toLowerCase().includes(q); }) || p.category.toLowerCase().includes(q);
  });
}

function renderGrid() {
  var filtered = getFiltered();
  grid.innerHTML = '';
  if (filtered.length === 0) {
    noResults.hidden = false;
    resultsCount.textContent = '검색 결과 0건';
  } else {
    noResults.hidden = true;
    filtered.forEach(function(p, i) { grid.appendChild(createCard(p, i)); });
    var total = projects.length;
    resultsCount.textContent = filtered.length < total ? filtered.length + '건 표시 중 (전체 ' + total + '건)' : '전체 ' + total + '건 표시 중';
  }
}

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGrid();
    document.getElementById('archive').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

searchInput.addEventListener('input', function() {
  currentSearch = searchInput.value.trim();
  renderGrid();
});

filterNavBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var filter = btn.dataset.filter;
    filterBtns.forEach(function(b) { b.classList.toggle('active', b.dataset.filter === filter); });
    currentFilter = filter;
    renderGrid();
    document.getElementById('archive').scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

function openModal(id) {
  var p = projects.find(function(pr) { return pr.id === id; });
  if (!p) return;
  var techBadges = p.technologies.map(function(t) { return '<span class="badge ' + techBadgeClass(t) + '">' + t + '</span>'; }).join('');
  var conceptItems = p.keyConcepts.map(function(k) { return '<div class="key-concept-item">' + k + '</div>'; }).join('');
  var previewHtml = p.canPreview ? '<div class="modal-preview"><iframe src="' + p.previewPath + '" title="미리보기" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe></div>' : '<div class="modal-no-preview"><span>이 파일은 iframe에서 직접 미리보기가 어렵습니다.</span><span>아래 소스 링크에서 파일을 확인해 주세요.</span></div>';
  var actionsHtml = (p.canPreview ? '<a class="btn btn-primary" href="' + p.previewPath + '" target="_blank" rel="noopener noreferrer">새 탭에서 열기</a>' : '') + '<a class="btn btn-ghost" href="' + p.path + '" target="_blank" rel="noopener noreferrer">소스 보기</a>';
  modalContent.innerHTML = '<div class="modal-header"><div class="modal-badge-row"><span class="badge badge-' + p.category + '">' + p.category.toUpperCase() + '</span><span class="badge" style="background:#f5f5f5;color:#737373;">' + difficultyLabel[p.difficulty] + '</span></div><h2 class="modal-title" id="modalTitle">' + p.title + '</h2><div class="modal-path">' + p.folder + ' / ' + p.file + '</div></div><div class="modal-body"><div><div class="modal-section-title">설명</div><p class="modal-text">' + p.description + '</p></div><div><div class="modal-section-title">학습 목표</div><p class="modal-text">' + p.objective + '</p></div><div><div class="modal-section-title">사용 기술</div><div class="modal-tags">' + techBadges + '</div></div><div><div class="modal-section-title">핵심 개념</div><div class="key-concepts-list">' + conceptItems + '</div></div><div><div class="modal-section-title">미리보기</div>' + previewHtml + '</div><div class="modal-actions">' + actionsHtml + '</div></div>';
  modalOverlay.hidden = false;
  requestAnimationFrame(function() { modalOverlay.classList.add('open'); });
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  setTimeout(function() { modalOverlay.hidden = true; document.body.style.overflow = ''; }, 250);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && !modalOverlay.hidden) closeModal(); });

window.addEventListener('scroll', function() { navHeader.classList.toggle('scrolled', window.scrollY > 20); updateActiveNav(); }, { passive: true });

function updateActiveNav() {
  var sections = ['hero', 'archive', 'journey', 'about'];
  var offset = 80; var active = 'hero';
  sections.forEach(function(id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < offset) active = id; });
  navLinkItems.forEach(function(a) { a.classList.toggle('active', a.dataset.section === active); });
}

navToggle.addEventListener('click', function() { var isOpen = navLinks.classList.toggle('open'); navToggle.setAttribute('aria-expanded', isOpen); });
document.querySelectorAll('.nav-link[data-section]').forEach(function(a) { a.addEventListener('click', function() { navLinks.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }); });

function animateCounter(el, target, duration) {
  var start = performance.now();
  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

var statObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) { if (entry.isIntersecting) { var el = entry.target; animateCounter(el, parseInt(el.dataset.target, 10), 1200); statObserver.unobserve(el); } });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(function(el) { statObserver.observe(el); });

var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function(el) { revealObserver.observe(el); });

renderGrid();