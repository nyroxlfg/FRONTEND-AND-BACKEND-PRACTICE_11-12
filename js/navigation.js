function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav__item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav__link');
        if (!link) return;
        
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();
        
        // Убираем активный класс у всех
        item.classList.remove('nav__item--active');
        
        // Если имена файлов совпадают - активируем
        if (linkPage === currentPage) {
            item.classList.add('nav__item--active');
        }
        
        // Особый случай: главная страница
        if ((currentPage === '' || currentPage === 'index.html') && linkPage === 'index.html') {
            item.classList.add('nav__item--active');
        }
    });
}

// Запускаем когда страница загрузится
document.addEventListener('DOMContentLoaded', initNavigation);