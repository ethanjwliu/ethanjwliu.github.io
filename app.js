(() => {
  'use strict';

  const projects = [
    {
      id: 'non-tariff-measures',
      title: 'Quantifying the Effects of Non-Tariff Measures on African Agri-Food Exporters',
      status: 'Journal article · Agrekon, 2019',
      summary: 'We found that non-tariff measures reduced African agri-food exports. The size of the effect varied with the exporter’s stage of economic development.',
      kinds: ['research'], topics: ['Econometrics', 'Policy analysis'],
      techniques: ['VARMA', 'Intervention analysis', 'PCA and clustering'],
      link: 'https://doi.org/10.1080/03031853.2019.1581624', linkLabel: 'Read the paper'
    },
    {
      id: 'fdi-income-inequality',
      title: 'Foreign Direct Investment and Income Inequality in Host Countries',
      status: 'Research in progress',
      summary: 'Using a panel of 115 countries from 1995 to 2022, I examine whether the relationship between foreign investment and income inequality changes once FDI reaches a certain share of GDP.',
      kinds: ['research'], topics: ['Macroeconomics and geopolitics'],
      techniques: ['Panel fixed effects', 'Threshold models', 'R and Stata']
    },
    {
      id: 'modern-mercantilism',
      title: 'Modern Mercantilism, Market Fragmentation, and Corporate Global Strategy',
      status: 'Research in progress',
      summary: 'How do multinationals reorganize when industrial policy, trade restrictions, and technology controls divide their markets? This project examines regionalization, strategic decoupling, and political ties in host countries.',
      kinds: ['research'], topics: ['Macroeconomics and geopolitics', 'Policy analysis'],
      techniques: ['Political economy', 'Corporate strategy', 'Case analysis']
    },
    {
      id: 'political-signaling',
      title: 'Talk, Silence, and Action: AI Analysis of Corporate Political Signaling in Earnings Calls',
      status: 'Research in progress',
      summary: 'I study what S&P 500 executives say about political risk on earnings calls, how investors respond, and how those statements compare with firms’ lobbying records and 10-K filings.',
      kinds: ['research'], topics: ['Text analysis and AI'],
      techniques: ['LLM classification', 'Event studies', 'Python']
    },
    {
      id: 'food-insecurity',
      title: 'Food Insecurity in North Dakota',
      status: 'Policy brief · Challey Institute, 2024',
      summary: 'Working with the Great Plains Food Bank, I used county-level data to estimate a $47.8 million food assistance gap. The findings informed legislative discussions and regional news coverage.',
      kinds: ['research', 'applied'], topics: ['Policy analysis'],
      techniques: ['Stakeholder engagement', 'Census and USDA data'],
      link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Food_Insecurity_in_North_Dakota.pdf', linkLabel: 'Read the brief'
    },
    {
      id: 'university-funding',
      title: 'Suggested Revisions for the North Dakota University System’s Funding Formula',
      status: 'Policy report · Challey Institute',
      summary: 'Ricky Feir and I estimated what graduates contribute to North Dakota through earnings and taxes. Lower in-state retention reduced the estimated value of an online master’s degree to the state by more than 20% compared with an in-person degree.',
      kinds: ['research', 'applied'], topics: ['Policy analysis'],
      techniques: ['Return on investment', 'Scenario analysis', 'Graduate retention'],
      link: 'ndus-funding-formula.pdf', linkLabel: 'Read the report'
    }
  ];

  // The home page uses the same records as the archive.
  const selected = ['political-signaling', 'non-tariff-measures', 'university-funding'];
  const publications = [
    { title: 'Quantifying the effects of non-tariff measures on African agri-food exporters', venue: 'Liu, C., Lin, D., Liu, J., & Li, Y. (2019). Agrekon, 58(4), 1–21.', status: 'Journal article', link: 'https://doi.org/10.1080/03031853.2019.1581624' },
    { title: 'Utilizing TN status to attract workers to North Dakota', venue: 'Liu, J. (2025). Challey Institute, North Dakota State University.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Utilizing_TN_Status_to_Attract_Workers_to_North_Dakota.pdf' },
    { title: 'Food insecurity in North Dakota', venue: 'Liu, J. (2024). Challey Institute for Global Innovation and Growth, NDSU.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Food_Insecurity_in_North_Dakota.pdf' },
    { title: 'Solutions for the teacher shortage in North Dakota', venue: 'Feir, R., & Liu, E. (2024). Challey Institute for Global Innovation and Growth, NDSU.', status: 'Policy brief', link: 'https://www.ndsu.edu/fileadmin/challeyinstitute/Solutions_for_the_Teacher_Shortage_in_North_Dakota.pdf' }
  ];
  const methods = [
    { name: 'Panel fixed effects and threshold models', tools: 'R, Stata', detail: 'I use two-way fixed effects and threshold models to examine how FDI relates to income inequality in a 115-country panel.', project: 'fdi-income-inequality' },
    { name: 'Event studies and quasi-experimental designs', tools: 'R, Stata', detail: 'In the earnings call project, I test whether the way firms describe political risk is associated with abnormal returns around the call date.', project: 'political-signaling' },
    { name: 'Time series and intervention analysis', tools: 'R, Python', detail: 'We used VARMA models and intervention analysis to estimate how non-tariff measures changed agri-food trade across countries.', project: 'non-tariff-measures' },
    { name: 'Language models and text analysis', tools: 'Python', detail: 'I classify political-risk disclosures at the paragraph level and use semantic similarity to match earnings call passages to risk factors in 10-K filings.', project: 'political-signaling' },
    { name: 'Scenario analysis and simulation', tools: 'Python', detail: 'For the North Dakota funding report, I varied assumptions about earnings and graduate retention to see how they affected the estimated return to the state.', project: 'university-funding' },
    { name: 'Dashboards and visualization', tools: 'Tableau, Power BI', detail: 'I built county-level dashboards with the Great Plains Food Bank to compare local food needs with national trends.', project: 'food-insecurity' },
    { name: 'Public and financial data engineering', tools: 'SQL, Python', detail: 'I build analysis datasets from Census ACS, BEA, BLS, SEC EDGAR, OpenSecrets, World Bank WDI, CRSP, and Compustat.' }
  ];
  const areas = [
    ['Applied econometrics and time series', 'Panel fixed effects, two-stage regression, VARMA, intervention analysis, forecasting, and Monte Carlo simulation.'],
    ['Macroeconomics and geopolitics', 'Cross-border capital flows, supply-chain relocation, trade policy, and industrial upgrading.'],
    ['Policy analysis and communication', 'Policy briefs, public dashboards, and analysis for legislative discussions.'],
    ['Causal inference and experimentation', 'Difference-in-differences, regression discontinuity, instrumental variables, synthetic control, matching, and natural experiments.'],
    ['Text and alternative data', 'Earnings call transcripts, regulatory filings, and market reactions to corporate disclosures.']
  ];
  const groupLabels = { all: 'All work', research: 'Academic research', applied: 'Applied projects' };
  const pageNames = { home: 'Research & policy', research: 'Research & projects', toolbox: 'Methods', about: 'About' };
  const filters = { group: 'all', topic: '' };
  const byId = (id) => document.getElementById(id);
  const projectById = (id) => projects.find((project) => project.id === id);

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function link(label, href) {
    const anchor = element('a', label);
    anchor.href = href;
    return anchor;
  }

  function record(meta, title, summary, href) {
    const article = element('article', '', 'record');
    const heading = element('h3');
    if (href) heading.append(link(title, href));
    else heading.textContent = title;
    article.append(element('p', meta, 'meta'), heading, element('p', summary));
    return article;
  }

  function projectRecord(project, featured) {
    const article = record(project.status, project.title, project.summary, featured ? '#research/' + project.id : null);
    if (featured) return article;
    article.id = 'project-' + project.id;
    article.tabIndex = -1;
    const foot = element('div', '', 'entry-foot');
    foot.append(element('span', project.techniques.join(' · '), 'techniques'));
    if (project.link) foot.append(link(project.linkLabel, project.link));
    article.append(foot);
    return article;
  }

  function renderContent() {
    byId('selected-list').replaceChildren(...selected.map((id) => projectRecord(projectById(id), true)));
    byId('publications').replaceChildren(...publications.map((p) => record(p.status, p.title, p.venue, p.link)));
    byId('methods-list').replaceChildren(...methods.map((method) => {
      const article = record(method.tools, method.name, method.detail);
      if (method.project) {
        const foot = element('div', '', 'entry-foot');
        foot.append(link('View project →', '#research/' + method.project));
        article.append(foot);
      }
      return article;
    }));
    byId('capabilities').replaceChildren(...areas.map(([title, description]) => {
      const article = element('article', '', 'record');
      article.append(element('h3', title), element('p', description));
      return article;
    }));
  }

  function renderArchive() {
    const base = projects.filter((p) => filters.group === 'all' || p.kinds.includes(filters.group));
    const topics = [...new Set(base.flatMap((p) => p.topics))].sort();
    if (!topics.includes(filters.topic)) filters.topic = '';
    for (const button of byId('research-groups').children) {
      button.setAttribute('aria-pressed', String(button.dataset.group === filters.group));
    }
    byId('topic').replaceChildren(new Option('All topics', ''), ...topics.map((t) => new Option(t, t)));
    byId('topic').value = filters.topic;
    const matches = base.filter((p) => !filters.topic || p.topics.includes(filters.topic));
    byId('research-count').textContent = matches.length + (matches.length === 1 ? ' project' : ' projects');
    byId('research-list').replaceChildren(...matches.map((p) => projectRecord(p, false)));
  }

  function setUpFilters() {
    for (const [key, label] of Object.entries(groupLabels)) {
      const button = element('button', label);
      button.type = 'button';
      button.dataset.group = key;
      button.addEventListener('click', () => {
        filters.group = key;
        filters.topic = '';
        clearProjectAnchor();
        renderArchive();
      });
      byId('research-groups').append(button);
    }
    byId('topic').addEventListener('change', (event) => {
      filters.topic = event.target.value;
      clearProjectAnchor();
      renderArchive();
    });
  }

  function clearProjectAnchor() {
    if (location.hash.startsWith('#research/')) history.replaceState(null, '', '#research');
  }

  let currentPage = 'home';
  function route(initial = false) {
    const [section, id] = location.hash.slice(1).split('/');
    const inPage = section === 'contact' || section === 'content';
    const page = inPage ? currentPage : (Object.hasOwn(pageNames, section) ? section : 'home');
    const project = page === 'research' && id ? projectById(id) : null;
    currentPage = page;
    document.querySelectorAll('[data-page]').forEach((node) => { node.hidden = node.dataset.page !== page; });
    document.querySelectorAll('[data-nav]').forEach((anchor) => {
      const active = anchor.dataset.nav === (section === 'contact' ? section : page);
      if (active) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
    if (page === 'research') {
      if (project) { filters.group = 'all'; filters.topic = ''; }
      renderArchive();
    }
    document.title = 'Jiawei “Ethan” Liu | ' + pageNames[page];
    const target = section === 'contact' ? byId('contact') : project ? byId('project-' + project.id) : byId('content');
    if (section === 'contact' || project || !initial) {
      target.focus({ preventScroll: true });
      if (inPage || project) target.scrollIntoView({ block: 'start' });
      else window.scrollTo(0, 0);
    }
  }

  renderContent();
  setUpFilters();
  window.addEventListener('hashchange', () => route());
  route(true);
})();
