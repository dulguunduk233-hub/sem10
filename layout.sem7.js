// Same dark top bar + sidebar on every page
(function(){
  const page=document.body.dataset.page;
  const icons=document.createElement('link');
  icons.rel='stylesheet';
  icons.href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
  document.head.appendChild(icons);

  const pages=[['dashboard','dashboard.html','house-fill','Dashboard'],
               ['analytics','index.html','graph-up','Analytics'],
               ['users','users.html','people','User List'],
               ['projects','projects.html','briefcase','Projects Grid']];

  document.getElementById('topbar').innerHTML=
    `<a class="brand" href="dashboard.html">Company name</a>
     <div class="user"><span class="avatar" style="background:#8b6f5a">KD</span><span>Kate Dudley</span></div>`;

  document.getElementById('sidebar').innerHTML=
    `<ul class="nav flex-column">${pages.map(p=>`<li class="nav-item"><a class="nav-link d-flex align-items-center gap-2${p[0]===page?' active':''}" href="${p[1]}"><i class="bi bi-${p[2]}"></i> ${p[3]}</a></li>`).join('')}</ul>`;
})();