// Shared layout: sidebar + topbar injected on every page
const NAV = [
  {href:'index.html', icon:'bi-speedometer2', label:'Dashboard'},
  {href:'users.html', icon:'bi-people', label:'Users'},
  {href:'add-user.html', icon:'bi-person-plus', label:'Add User'},
  {href:'profile.html', icon:'bi-person-badge', label:'Profile'},
  {href:'charts.html', icon:'bi-bar-chart', label:'Charts'},
  {href:'tables.html', icon:'bi-table', label:'Tables'},
  {href:'forms.html', icon:'bi-ui-checks', label:'Forms'},
  {href:'components.html', icon:'bi-grid-1x2', label:'Components'},
  {href:'alerts.html', icon:'bi-exclamation-triangle', label:'Alerts'},
  {href:'modals.html', icon:'bi-window-stack', label:'Modals'},
  {href:'settings.html', icon:'bi-gear', label:'Settings'},
  {href:'blank.html', icon:'bi-file-earmark', label:'Blank Page'},
];

function renderLayout(activeHref){
  const nav = NAV.map(n=>`<a href="${n.href}" class="nav-item ${n.href===activeHref?'active':''}"><i class="bi ${n.icon}"></i><span>${n.label}</span></a>`).join('');
  const sidebar = `
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <div class="brand-logo"><i class="bi bi-columns-gap"></i></div>
        <div><div class="brand-title">adminHMD</div><div class="brand-sub">Admin Template</div></div>
      </div>
      <nav>${nav}</nav>
      <div class="workspace">
        <div class="avatar mb-2">AV</div>
        <div class="fw-semibold">Admin Hasan</div>
        <div class="small text-muted">Active Workspace</div>
      </div>
    </aside>`;
  const topbar = `
    <header class="topbar">
      <button class="icon-btn hamburger" onclick="document.getElementById('sidebar').classList.toggle('show')"><i class="bi bi-list"></i></button>
      <div class="search"><input type="text" placeholder="Search users, orders, reports"></div>
      <button class="icon-btn" id="themeBtn" title="Toggle theme"><i class="bi bi-moon"></i></button>
      <button class="icon-btn" title="Notifications"><i class="bi bi-bell"></i><span class="dot"></span></button>
      <div class="user-chip"><span class="avatar">AV</span><span class="fw-semibold">Admin Hasan</span><i class="bi bi-caret-down-fill small"></i></div>
    </header>`;
  const footer = `
    <footer class="footer">
      <div><span class="dot-live"></span>System running smoothly</div>
      <div>Copyright 2026 adminHMD. Developed by <b>Md. Hasan Mahmud</b> • Distributed by <b>ThemeWagon</b></div>
      <div>Professional dashboard template.</div>
    </footer>`;
  document.body.insertAdjacentHTML('afterbegin', `<div class="app">${sidebar}<div class="main">${topbar}<div class="content" id="pageContent"></div>${footer}</div></div>`);
  // move original body content into #pageContent
  const original = document.getElementById('page');
  if(original) document.getElementById('pageContent').appendChild(original);

  // theme toggle
  const saved = localStorage.getItem('theme');
  if(saved==='dark') document.documentElement.classList.add('dark');
  document.getElementById('themeBtn').addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark')?'dark':'light');
  });
}
