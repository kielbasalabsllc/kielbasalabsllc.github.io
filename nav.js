// ── Google Analytics ──
(function () {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-KXV9WXZJQW';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-KXV9WXZJQW');
}());

// ── Hamburger menu ──
(function () {
    var h = document.getElementById('hamburger');
    var m = document.getElementById('mobile-menu');
    var c = document.getElementById('mobile-menu-close');

    function openMenu() {
        m.classList.add('open');
        m.setAttribute('aria-hidden', 'false');
        h.setAttribute('aria-expanded', 'true');
        c.focus();
    }
    function closeMenu() {
        m.classList.remove('open');
        m.setAttribute('aria-hidden', 'true');
        h.setAttribute('aria-expanded', 'false');
        h.focus();
    }

    h.addEventListener('click', openMenu);
    c.addEventListener('click', closeMenu);
    m.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && m.classList.contains('open')) closeMenu();
    });
}());
