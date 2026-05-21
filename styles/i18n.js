(function() {
    function updateTitle(lang) {
        const titles = {
            'en': 'Ultimate Tennis Statistics | The Most Complete Tennis Tracking App',
            'fr': 'Ultimate Tennis Statistics | L\'application de suivi de tennis la plus complète'
        };
        const pageTitles = {
            'support.html': {
                'en': 'Support | Ultimate Tennis Statistics',
                'fr': 'Support | Ultimate Tennis Statistics'
            },
            'privacy.html': {
                'en': 'Privacy Policy | Ultimate Tennis Statistics',
                'fr': 'Politique de Confidentialité | Ultimate Tennis Statistics'
            }
        };

        const path = window.location.pathname.split('/').pop() || 'index.html';
        if (pageTitles[path]) {
            document.title = pageTitles[path][lang];
        } else if (path === 'index.html' || path === 'homepage.html') {
            document.title = titles[lang];
        }
    }

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('preferred-language', lang);
        updateToggleButton(lang);
        updateTitle(lang);
    }

    function updateToggleButton(lang) {
        const btn = document.getElementById('lang-toggle-btn');
        if (btn) {
            btn.innerHTML = lang === 'en' ? 'Français' : 'English';
        }
    }

    function toggleLanguage() {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        setLanguage(newLang);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('preferred-language');
        const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        const initialLang = savedLang || browserLang;
        
        setLanguage(initialLang);

        const btn = document.getElementById('lang-toggle-btn');
        if (btn) {
            btn.addEventListener('click', toggleLanguage);
        }
    });
})();
