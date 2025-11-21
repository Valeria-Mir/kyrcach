
document.addEventListener('DOMContentLoaded', function() {
    console.log('Theme switcher loaded');

    const themeToggle = document.querySelector('.luna');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            console.log('Light theme applied');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            console.log('Dark theme applied');
        }
    }

    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);

    if (savedTheme === 'light') {
        applyTheme('light');
    } else {
        // По умолчанию темная тема
        applyTheme('dark');
    }

    // Обработчик клика на луну
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Moon clicked - current theme:', body.classList.contains('dark-theme') ? 'dark' : 'light');

            if (body.classList.contains('dark-theme')) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });

        themeToggle.style.cursor = 'pointer';
    } else {
        console.error('Moon icon not found!');
        // Проверим все изображения
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
            if (img.src.includes('luna')) {
                console.log('Found moon image:', img);
                img.classList.add('luna');
                img.style.cursor = 'pointer';
            }
        });
    }
});
// ДОБАВЬТЕ этот код в существующий ts.js

// Обработчик для лун в бургер-меню
function initMobileThemeToggle() {
    const mobileLuna = document.querySelector('.burger-menu .luna');
    if (mobileLuna) {
        mobileLuna.addEventListener('click', function() {
            // Ваш существующий код переключения темы
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light-theme');
            }

            // Закрываем бургер-меню
            document.getElementById('burger-toggle').checked = false;
        });
    }
}

// Запускаем при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initMobileThemeToggle();
});