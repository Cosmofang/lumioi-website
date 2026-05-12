(function () {
  var NAV_HTML = [
    '<nav>',
    '  <div class="nav-inner">',
    '    <a href="index.html" class="nav-logo">',
    '      <img src="logo/logocis001.svg" alt="deeplumen" class="nav-logo-img" />',
    '    </a>',
    '    <div class="nav-links">',
    '      <span class="nav-link-wrap">',
    '        <a href="shopify-app.html" class="nav-link" data-nav="shopify-app">Shopify APP</a>',
    '        <span class="nav-badge-new">NEW</span>',
    '      </span>',
    '      <a href="lumenshop.html" class="nav-link" data-nav="lumenshop">LumenShop</a>',
    '      <a href="https://lumioi.com/blog" class="nav-link">Blog</a>',
    '      <a href="index.html#products" class="nav-link">Products</a>',
    '      <a href="About Us_page.html" class="nav-link" data-nav="about">About</a>',
    '    </div>',
    '    <div class="nav-actions">',
    '      <a href="Book a Demo.html" class="btn-demo-nav">Book a Demo</a>',
    '      <a href="https://panel.lumioi.com/" class="btn-login-nav">Log in</a>',
    '    </div>',
    '    <button class="nav-burger" id="nav-burger" aria-label="Menu"',
    '      onclick="(function(){var m=document.getElementById(\'nav-mobile-menu\');var b=document.getElementById(\'nav-burger\');m.classList.toggle(\'is-open\');b.classList.toggle(\'is-active\');})()">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '  </div>',
    '  <div class="nav-mobile-menu" id="nav-mobile-menu">',
    '    <span class="nav-link-wrap" style="padding:8px 0;border-bottom:1px solid #f0ebe4;">',
    '      <a href="shopify-app.html" class="nav-link">Shopify APP</a>',
    '      <span class="nav-badge-new">NEW</span>',
    '    </span>',
    '    <a href="lumenshop.html" class="nav-link" style="padding:8px 0;border-bottom:1px solid #f0ebe4;">LumenShop</a>',
    '    <a href="https://lumioi.com/blog" class="nav-link" style="padding:8px 0;border-bottom:1px solid #f0ebe4;">Blog</a>',
    '    <a href="index.html#products" class="nav-link" style="padding:8px 0;border-bottom:1px solid #f0ebe4;">Products</a>',
    '    <a href="About Us_page.html" class="nav-link" style="padding:8px 0;border-bottom:1px solid #f0ebe4;">About</a>',
    '    <a href="Book a Demo.html" class="btn-demo-nav" style="width:100%;text-align:center;">Book a Demo</a>',
    '    <a href="https://panel.lumioi.com/" class="btn-login-nav" style="width:100%;text-align:center;">Log in</a>',
    '  </div>',
    '</nav>'
  ].join('\n');

  // Inject nav HTML
  var placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = NAV_HTML;

  // Auto-detect active page and highlight the matching nav link
  var path = window.location.pathname.toLowerCase();
  var active = '';
  if (path.indexOf('lumenshop') !== -1) active = 'lumenshop';
  else if (path.indexOf('shopify-app') !== -1 || path.indexOf('shopify_app') !== -1) active = 'shopify-app';
  else if (path.indexOf('about') !== -1) active = 'about';

  if (active) {
    var link = document.querySelector('.nav-link[data-nav="' + active + '"]');
    if (link) link.classList.add('is-active');
  }

  // Scroll-triggered border
  var nav = document.querySelector('nav');
  if (nav) {
    function updateBorder() {
      nav.style.borderBottomColor = window.scrollY > 10
        ? 'rgba(234,234,234,0.6)'
        : 'transparent';
    }
    window.addEventListener('scroll', updateBorder, { passive: true });
    updateBorder();
  }
})();
