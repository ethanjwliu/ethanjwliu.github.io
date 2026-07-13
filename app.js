/* ===========================================================
   Ethan Liu — Research Portfolio
   Vanilla JS: data, rendering, page routing, carousels, filters
   =========================================================== */
(function () {
  'use strict';

  /* ---------- Data ---------- */

  const CAPABILITIES = [
    {
      title: 'Applied Econometrics & Time Series',
      desc: 'Panel fixed effects, two-stage regression, VARMA, intervention analysis, forecasting, and Monte Carlo simulation.',
      icon: 'M3 3v18h18|M7 15l4-5 3 3 5-7'
    },
    {
      title: 'Macro & Geopolitical Analysis',
      desc: 'Cross-border capital flows, supply-chain reallocation, trade policy, and emerging-market industrial upgrading.',
      icon: 'M12 2a10 10 0 100 20 10 10 0 000-20|M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10'
    },
    {
      title: 'Policy Analysis & Communication',
      desc: 'Turning data into evidence for non-technical audiences — dashboards, policy briefs, and testimony-ready analysis.',
      icon: 'M3 11l15-6v14L3 13v-2z|M18 8a4 4 0 010 8 M8 13.5V18a2 2 0 004 .5'
    },
    {
      title: 'Causal Inference & Experimentation',
      desc: "Measuring what actually moves the metric — difference-in-differences, RDD, instrumental variables, synthetic control, matching, and natural experiments when A/B tests aren't possible.",
      icon: 'M4 12h5c3 0 4-2 5-4s2-4 5-4h1 M4 12h5c3 0 4 2 5 4s2 4 5 4h1|M17 1l3 3-3 3 M17 17l3 3-3 3'
    },
    {
      title: 'Text & Alternative Data',
      desc: 'LLM-based classification of thousands of S&P 500 earnings call transcripts, linked to market reaction through event-study designs.',
      icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z|M14 2v6h6 M8 13h8 M8 17h6'
    }
  ];

  const PROJECTS = [
    {
      title: 'Quantifying the Effects of Non-Tariff Measures on African Agri-Food Exporters',
      takeaway: 'Time-series evidence that non-tariff measures significantly reduce agri-food trade, with heterogeneous impacts across countries at different development stages — using VARMA, intervention analysis, PCA, and clustering.',
      tags: ['VARMA', 'Intervention analysis', 'PCA / clustering'],
      status: 'Peer-reviewed · Agrekon',
      kinds: ['research'],
      areas: ['Econometrics', 'Policy Analysis'],
      published: true,
      capLabel: 'Econometrics',
      link: 'https://doi.org/10.1080/03031853.2019.1581624',
      linkLabel: 'View paper →'
    },
    {
      title: 'Foreign Direct Investment and Income Inequality in Host Countries',
      takeaway: 'Panel evidence from 115 countries (1995–2022) on the nonlinear link between FDI and within-country inequality — identifying an FDI/GDP threshold beyond which effects turn significant.',
      tags: ['Panel fixed effects', 'Threshold effects', 'R / Stata'],
      status: 'In progress',
      kinds: ['research'],
      areas: ['Macro & Geopolitical'],
      published: false,
      capLabel: 'Macro & Geopolitical'
    },
    {
      title: 'Modern Mercantilism, Market Fragmentation, and Corporate Global Strategy',
      takeaway: 'How industrial policy, trade restrictions, and technology controls fragment global markets — and when firms respond with regionalization, strategic decoupling, or politically embedded internationalization.',
      tags: ['Political economy', 'Corporate strategy', 'Case analysis'],
      status: 'In progress',
      kinds: ['research'],
      areas: ['Macro & Geopolitical', 'Policy Analysis'],
      published: false,
      capLabel: 'Macro & Geopolitical'
    },
    {
      title: 'Talk, Silence, and Action: AI Analysis of Corporate Political Signaling in Earnings Calls',
      takeaway: 'LLM-based paragraph-level classification of political-risk disclosure across thousands of S&P 500 earnings call transcripts, testing whether disclosure framing moves abnormal returns — triangulated with lobbying records and 10-K filings.',
      tags: ['LLM classification', 'Event study (CRSP)', 'Python / NLP'],
      status: 'In progress',
      kinds: ['research'],
      areas: ['Text & LLM'],
      published: false,
      capLabel: 'Text & LLM'
    },
    {
      title: 'Food Insecurity in North Dakota',
      takeaway: 'Partnered with the Great Plains Food Bank to turn stakeholder needs into county-level metrics, then carried the findings into the public debate — TV and newspaper interviews, an op-ed in the Bismarck Tribune, and citations in legislative discussions on a $47.8M funding gap.',
      tags: ['Stakeholder engagement', 'Media & op-ed', 'Public data (Census, USDA)'],
      status: 'Published · Press coverage',
      kinds: ['research', 'project'],
      areas: ['Policy Analysis'],
      published: true,
      capLabel: 'Policy Analysis',
      link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Food_Insecurity_in_North_Dakota.pdf',
      linkLabel: 'Read the brief →'
    },
    {
      title: "Suggested Revisions for the North Dakota University System's Funding Formula",
      takeaway: 'Proposed shifting NDUS funding from a cost-based to a benefit-based (ROI) formula — estimating wages, state income-tax contributions, and worker retention by degree level and delivery mode. Found master’s degrees lose over 20% of their value to the state when offered online, driven by lower retention.',
      tags: ['ROI modeling', 'Problem formulation', 'Stress testing'],
      status: 'Policy report · Challey Institute',
      kinds: ['research', 'project'],
      areas: ['Policy Analysis'],
      published: false,
      capLabel: 'Policy Analysis',
      link: 'ndus-funding-formula.pdf',
      linkLabel: 'Read the report →'
    }
  ];

  const PUBS = [
    { title: 'Quantifying the effects of non-tariff measures on African agri-food exporters', venue: 'Liu, C., Lin, D., Liu, J., & Li, Y. (2019). Agrekon, 58(4), 1–21.', status: 'Peer-reviewed', link: 'https://doi.org/10.1080/03031853.2019.1581624' },
    { title: 'Utilizing TN status to attract workers to North Dakota', venue: 'Liu, J. (2025). Challey Institute, North Dakota State University.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Utilizing_TN_Status_to_Attract_Workers_to_North_Dakota.pdf' },
    { title: 'Food insecurity in North Dakota', venue: 'Liu, J. (2024). Challey Institute for Global Innovation and Growth, NDSU.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Food_Insecurity_in_North_Dakota.pdf' },
    { title: 'Solutions for the teacher shortage in North Dakota', venue: 'Feir, R., & Liu, E. (2024). Challey Institute for Global Innovation and Growth, NDSU.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Solutions_for_the_Teacher_Shortage_in_North_Dakota.pdf' }
  ];

  const TITLES = {
    fdi: 'Foreign Direct Investment and Income Inequality in Host Countries',
    talk: 'Talk, Silence, and Action: AI Analysis of Corporate Political Signaling in Earnings Calls',
    ntm: 'Quantifying the Effects of Non-Tariff Measures on African Agri-Food Exporters',
    highered: "Suggested Revisions for the North Dakota University System's Funding Formula",
    food: 'Food Insecurity in North Dakota'
  };

  const TOOLBOX = [
    { method: 'Panel fixed effects & threshold models', desc: 'Two-way FE, threshold and second-order effects on multi-country panels.', tools: ['R', 'Stata'], project: 'Foreign Direct Investment and Income Inequality in Host Countries', evidence: 'Built a 115-country panel (1995–2022) and identified an FDI/GDP threshold beyond which inequality effects turn statistically significant.', target: TITLES.fdi },
    { method: 'Event studies & quasi-experimental designs', desc: 'DiD, IV, synthetic control, matching; abnormal-return event studies.', tools: ['R', 'Stata'], project: 'Talk, Silence, and Action', evidence: 'Event-study design testing whether political-risk disclosure framing conditions abnormal returns around earnings call dates.', target: TITLES.talk },
    { method: 'Time series: VARMA & intervention analysis', desc: 'Multivariate time series with structural-break intervention effects; PCA and clustering.', tools: ['R', 'Python'], project: 'Non-Tariff Measures and African Agri-Food Exporters (Agrekon, peer-reviewed)', evidence: 'Quantified significant trade reductions from NTMs, with heterogeneous impacts across development stages.', target: TITLES.ntm },
    { method: 'LLM classification & NLP', desc: 'Paragraph-level text classification at scale; semantic similarity analysis.', tools: ['Python'], project: 'Talk, Silence, and Action', evidence: 'Classified political-risk disclosure across thousands of S&P 500 earnings call transcripts; matched call passages against 10-K risk factors by semantic similarity.', target: TITLES.talk },
    { method: 'Scenario analysis, stress testing & Monte Carlo', desc: 'Counterfactual and robustness analysis under varying assumptions.', tools: ['Python'], project: 'Suggested Revisions for the NDUS Funding Formula', evidence: 'Modeled lifetime earnings, retention, and tax contributions, then stress-tested funding outcomes across retention and earnings scenarios.', target: TITLES.highered },
    { method: 'Dashboards & visualization', desc: 'Stakeholder-facing dashboards benchmarking local metrics against national trends.', tools: ['Tableau', 'Power BI'], project: 'Food Insecurity in North Dakota', evidence: 'County-level dashboards built with the Great Plains Food Bank that quantified a $47.8M aid shortfall; findings entered legislative discussions and regional press.', target: TITLES.food },
    { method: 'Public data engineering', desc: 'Building analysis-ready tables from public sources.', tools: ['SQL', 'Python'], project: 'Across projects', evidence: 'Compiled and joined extracts from public sources into reproducible analysis datasets.', sources: ['Census ACS', 'BEA', 'BLS', 'SEC EDGAR', 'OpenSecrets', 'World Bank WDI', 'CRSP', 'Compustat'], target: null }
  ];

  const CAP_FILTERS = ['all', 'Econometrics', 'Macro & Geopolitical', 'Policy Analysis', 'Text & LLM'];

  /* ---------- Helpers ---------- */

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const slug = (title) => 'proj-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
  const areasOf = (p) => p.areas || [p.capLabel];
  const isMobile = () => window.innerWidth < 700;

  function badge(p) {
    const cls = p.published ? 'badge badge--published' : 'badge badge--progress';
    return `<span class="${cls}">${esc(p.status)}</span>`;
  }
  function tagsHtml(tags) {
    return tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
  }

  /* ---------- State ---------- */

  const state = {
    page: 'home',
    workFilter: 'all',
    capIndex: 0,
    workIndex: 0,
    rGroup: 'research',
    rFilter: 'all'
  };

  /* ---------- Capabilities carousel ---------- */

  function renderCapabilities() {
    const track = $('#cap-track');
    track.innerHTML = '';
    CAPABILITIES.forEach((c) => {
      const [i1, i2] = c.icon.split('|');
      const card = el('div', 'cap-card');
      card.innerHTML =
        `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E9384" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${i1}"></path><path d="${i2}"></path></svg>` +
        `<h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p>`;
      track.appendChild(card);
    });
    renderDots('#cap-dots', CAPABILITIES.length, state.capIndex, (i) => scrollTrack('#cap-track', i, 344));
  }

  /* ---------- Selected work carousel ---------- */

  function renderWorkChips() {
    const box = $('#work-chips');
    box.innerHTML = '';
    CAP_FILTERS.forEach((key) => {
      const b = el('button', 'chip' + (key === state.workFilter ? ' is-active' : ''), key === 'all' ? 'All' : esc(key));
      b.addEventListener('click', () => {
        state.workFilter = key;
        state.workIndex = 0;
        renderWorkChips();
        renderWork();
        const t = $('#work-track');
        if (t) t.scrollTo({ left: 0 });
      });
      box.appendChild(b);
    });
  }

  function renderWork() {
    const track = $('#work-track');
    track.innerHTML = '';
    const list = PROJECTS.filter((p) => state.workFilter === 'all' || areasOf(p).includes(state.workFilter));
    list.forEach((p) => {
      const card = el('article', 'proj-card');
      const link = p.link ? `<a class="card-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel)}</a>` : '';
      card.innerHTML =
        `<div class="proj-card__top"><span class="cap-tag">${esc(p.capLabel)}</span>${badge(p)}</div>` +
        `<h3>${esc(p.title)}</h3><p>${esc(p.takeaway)}</p>` +
        `<div class="tags">${tagsHtml(p.tags)}</div>${link}`;
      track.appendChild(card);
    });
    renderDots('#work-dots', list.length, state.workIndex, (i) => scrollTrack('#work-track', i, 364));
  }

  /* ---------- Dots ---------- */

  function renderDots(sel, count, active, onClick) {
    const box = $(sel);
    box.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const d = el('button', 'dot' + (i === active ? ' is-active' : ''));
      d.setAttribute('aria-label', 'Go to card ' + (i + 1));
      d.addEventListener('click', () => onClick(i));
      box.appendChild(d);
    }
  }

  function scrollTrack(sel, index, step) {
    const track = $(sel);
    if (!track) return;
    const cards = track.children.length;
    const i = Math.max(0, Math.min(cards - 1, index));
    track.scrollTo({ left: i * step, behavior: 'smooth' });
  }

  /* ---------- Research page ---------- */

  function renderResearchSegments() {
    const box = $('#research-segments');
    box.innerHTML = '';
    const segs = [
      { key: 'research', label: 'Academic Research' },
      { key: 'project', label: 'Applied Projects' }
    ].filter((s) => PROJECTS.some((p) => (p.kinds || []).includes(s.key)));

    box.parentElement.style.display = segs.length > 1 ? '' : 'none';
    segs.forEach((s) => {
      const b = el('button', s.key === state.rGroup ? 'is-active' : '', esc(s.label));
      b.addEventListener('click', () => {
        if (s.key === state.rGroup) return;
        state.rGroup = s.key;
        state.rFilter = 'all';
        const listEl = $('#research-list');
        listEl.style.opacity = '0';
        setTimeout(() => {
          renderResearchSegments();
          renderResearchChips();
          renderResearchList();
          listEl.style.opacity = '1';
        }, 150);
      });
      box.appendChild(b);
    });
    $('#research-caption').textContent =
      state.rGroup === 'research'
        ? 'Peer-reviewed and doctoral working papers'
        : 'Policy analysis and applied work from my research roles';
  }

  function groupBase() {
    return PROJECTS.filter((p) => (p.kinds || []).includes(state.rGroup));
  }

  function renderResearchChips() {
    const box = $('#research-chips');
    box.innerHTML = '';
    const areas = [...new Set(groupBase().flatMap(areasOf))];
    if (areas.length <= 1) { box.style.display = 'none'; return; }
    box.style.display = '';
    ['all', ...areas].forEach((key) => {
      const b = el('button', 'chip' + (key === state.rFilter ? ' is-active' : ''), key === 'all' ? 'All' : esc(key));
      b.addEventListener('click', () => {
        state.rFilter = key;
        renderResearchChips();
        renderResearchList();
      });
      box.appendChild(b);
    });
  }

  function renderResearchList() {
    const box = $('#research-list');
    box.innerHTML = '';
    const list = groupBase().filter((p) => state.rFilter === 'all' || areasOf(p).includes(state.rFilter));
    list.forEach((p) => {
      const art = el('article', 'proj-row');
      art.id = slug(p.title);
      const link = p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel)}</a>` : '';
      art.innerHTML =
        `<div class="proj-row__top"><span class="cap-tag">${esc(p.capLabel)}</span>${badge(p)}</div>` +
        `<h3>${esc(p.title)}</h3><p class="proj-row__lead">${esc(p.takeaway)}</p>` +
        `<div class="proj-row__foot"><div class="tags">${tagsHtml(p.tags)}</div>${link}</div>`;
      box.appendChild(art);
    });
  }

  /* ---------- Toolbox ---------- */

  function renderToolbox() {
    const box = $('#toolbox-body');
    box.innerHTML = '';
    TOOLBOX.forEach((r) => {
      const row = el('div', 'toolbox-row');
      const tools = r.tools.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
      const sources = r.sources ? `<div class="tags" style="padding-top:2px;">${r.sources.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div>` : '';
      const view = r.target ? `<button class="view-link" data-goto="${esc(r.target)}">View project →</button>` : '';
      row.innerHTML =
        `<div><div class="method">${esc(r.method)}</div><p class="method-desc">${esc(r.desc)}</p></div>` +
        `<div class="cell-tools">${tools}</div>` +
        `<div class="cell-where"><div class="project">${esc(r.project)}</div><p class="evidence">${esc(r.evidence)}</p>${sources}${view}</div>`;
      box.appendChild(row);
    });
    box.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', () => goToProject(btn.getAttribute('data-goto')));
    });
  }

  /* ---------- Publications ---------- */

  function renderPubs() {
    const box = $('#pubs');
    box.innerHTML = '';
    PUBS.forEach((p) => {
      const row = el('div', 'pub');
      row.innerHTML =
        `<div><a class="pub__title" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.title)}</a>` +
        `<div class="pub__venue">${esc(p.venue)}</div></div>` +
        `<span class="pub__status">${esc(p.status)}</span>`;
      box.appendChild(row);
    });
  }

  /* ---------- Routing ---------- */

  const PAGES = ['home', 'about', 'research', 'toolbox'];

  function setPage(page, opts) {
    opts = opts || {};
    if (PAGES.indexOf(page) === -1) page = 'home';
    state.page = page;

    document.querySelectorAll('.page').forEach((m) => {
      m.classList.toggle('is-active', m.getAttribute('data-page') === page);
    });
    document.querySelectorAll('.nav__link[data-nav]').forEach((b) => {
      b.classList.toggle('is-active', b.getAttribute('data-nav') === page);
    });

    if (page === 'research') {
      renderResearchSegments();
      renderResearchChips();
      renderResearchList();
    }

    if (history.replaceState) {
      const hash = page === 'home' ? ' ' : '#' + page;
      if (location.hash.slice(1) !== page && !(page === 'home' && !location.hash)) {
        history.pushState(null, '', page === 'home' ? location.pathname : '#' + page);
      }
    }

    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: opts.smooth ? 'smooth' : 'auto' });
  }

  function goToProject(title) {
    setPage('research');
    state.rGroup = 'research';
    state.rFilter = 'all';
    renderResearchSegments();
    renderResearchChips();
    renderResearchList();
    setTimeout(() => {
      const target = document.getElementById(slug(title));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 120);
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  /* ---------- Wire up ---------- */

  function bindGlobalNav() {
    document.querySelectorAll('[data-nav]').forEach((b) => {
      b.addEventListener('click', () => setPage(b.getAttribute('data-nav'), { smooth: true }));
    });
    document.querySelectorAll('[data-scroll]').forEach((b) => {
      b.addEventListener('click', () => scrollToId(b.getAttribute('data-scroll')));
    });
    // carousel arrows
    document.querySelectorAll('[data-arrows]').forEach((group) => {
      const which = group.getAttribute('data-arrows');
      group.querySelectorAll('[data-dir]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const dir = btn.getAttribute('data-dir') === 'next' ? 1 : -1;
          if (which === 'cap') scrollTrack('#cap-track', state.capIndex + dir, 344);
          else scrollTrack('#work-track', state.workIndex + dir, 364);
        });
      });
    });
    // track scroll -> update dots
    bindTrackScroll('#cap-track', '#cap-dots', 344, (i) => (state.capIndex = i));
    bindTrackScroll('#work-track', '#work-dots', 364, (i) => (state.workIndex = i));
  }

  function bindTrackScroll(trackSel, dotsSel, step, setIndex) {
    const track = $(trackSel);
    if (!track) return;
    track.addEventListener('scroll', () => {
      const idx = Math.round(track.scrollLeft / step);
      const dots = $(dotsSel).children;
      if (idx >= 0 && idx < dots.length) {
        setIndex(idx);
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('is-active', i === idx);
      }
    }, { passive: true });
  }

  window.addEventListener('popstate', () => {
    const page = location.hash.slice(1) || 'home';
    setPage(PAGES.indexOf(page) === -1 ? 'home' : page, { keepScroll: false });
  });

  /* ---------- Init ---------- */

  document.addEventListener('DOMContentLoaded', () => {
    renderCapabilities();
    renderWorkChips();
    renderWork();
    renderToolbox();
    renderPubs();
    bindGlobalNav();

    const initial = location.hash.slice(1);
    setPage(PAGES.indexOf(initial) === -1 ? 'home' : initial, { keepScroll: true });
  });
})();
