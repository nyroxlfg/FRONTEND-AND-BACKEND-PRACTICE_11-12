// Модальное окно
function initModal() {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем скролл
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Восстанавливаем скролл
    }

    // Обработчик для кнопки открытия
    const openButton = document.querySelector('.contacts__button');
    if (openButton) {
        openButton.addEventListener('click', openModal);
    }

    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Обработка формы
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Спасибо за обратную связь.');
            closeModal();
            this.reset();
        });
    }

    // Кнопка отмены
    const cancelButton = document.querySelector('.button--secondary');
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }

    // Закрытие на Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', initModal);