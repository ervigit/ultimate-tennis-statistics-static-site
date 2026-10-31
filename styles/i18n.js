(function() {
  function getPreferredLanguage() {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var urlLang = urlParams.get('lang');
      if (urlLang === 'fr' || urlLang === 'en') return urlLang;

      var hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (hash === 'fr' || hash === 'en') return hash;

      var savedLang = localStorage.getItem('preferred-language');
      if (savedLang === 'fr' || savedLang === 'en') return savedLang;

      var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (browserLang.startsWith('fr')) return 'fr';
    } catch (e) {
      // In case localStorage is blocked
    }
    return 'en';
  }

  function updateTitle(lang) {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (path.indexOf('cinqcents') !== -1) {
      document.title = 'CinqCents iOS App';
    } else if (path.indexOf('privacy') !== -1) {
      document.title = (lang === 'fr')
        ? 'Ultimate Tennis Statistics - Politique de confidentialité'
        : 'Ultimate Tennis Statistics - Privacy Policy';
    } else if (path.indexOf('support') !== -1) {
      document.title = (lang === 'fr')
        ? 'Ultimate Tennis Statistics - Support'
        : 'Ultimate Tennis Statistics - Support';
    } else {
      document.title = 'Ultimate Tennis Statistics';
    }
  }

  function setLanguage(lang) {
    if (lang !== 'fr' && lang !== 'en') {
      lang = 'en';
    }
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {}

    updateTitle(lang);
  }

  function toggleLanguage() {
    var currentLang = document.documentElement.getAttribute('lang') || 'en';
    var newLang = (currentLang === 'en') ? 'fr' : 'en';
    setLanguage(newLang);
  }

  // Expose globally
  window.setLanguage = setLanguage;
  window.toggleLanguage = toggleLanguage;

  // Apply language immediately before DOM render
  var initialLang = getPreferredLanguage();
  document.documentElement.setAttribute('lang', initialLang);

  // When DOM is loaded, update title
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setLanguage(document.documentElement.getAttribute('lang') || initialLang);
    });
  } else {
    setLanguage(initialLang);
  }
})();
