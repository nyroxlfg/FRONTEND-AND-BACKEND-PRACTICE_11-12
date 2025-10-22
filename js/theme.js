// Функция создания кнопки темы
function createThemeButton() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Переключить тему');
    
    // Добавляем SVG вместо эмодзи для лучшей совместимости
    themeToggle.innerHTML = `
        <svg class="theme-toggle__icon" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12,18C8.7,18 6,15.3 6,12C6,8.7 8.7,6 12,6C15.3,6 18,8.7 18,12C18,15.3 15.3,18 12,18M12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4M12,7C9.2,7 7,9.2 7,12C7,14.8 9.2,17 12,17C14.8,17 17,14.8 17,12C17,9.2 14.8,7 12,7Z"/>
        </svg>
    `;

    return themeToggle;
}

// Функция обновления иконки темы
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle__icon path');
    if (icon) {
        if (theme === 'dark') {
            icon.setAttribute('d', 'M12,7C9.2,7 7,9.2 7,12C7,14.8 9.2,17 12,17C14.8,17 17,14.8 17,12C17,9.2 14.8,7 12,7M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C10.9,18 10,18.9 10,20C10,21.1 10.9,22 12,22C13.1,22 14,21.1 14,20C14,18.9 13.1,18 12,18Z');
        } else {
            icon.setAttribute('d', 'M12,18C8.7,18 6,15.3 6,12C6,8.7 8.7,6 12,6C15.3,6 18,8.7 18,12C18,15.3 15.3,18 12,18M12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4M12,7C9.2,7 7,9.2 7,12C7,14.8 9.2,17 12,17C14.8,17 17,14.8 17,12C17,9.2 14.8,7 12,7Z');
        }
    }
}

// Инициализация темы
function initTheme() {
    const header = document.querySelector('.header');
    if (!header) return;

    // Создаем кнопку
    const themeToggle = createThemeButton();
    
    // Обработчик клика
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Добавляем кнопку в header
    header.appendChild(themeToggle);

    // Восстанавливаем тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', initTheme);