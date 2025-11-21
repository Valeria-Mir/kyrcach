const scrollContainer = document.getElementById('scrollContainer');
let scrollPosition = 0;
const scrollSpeed = 1;
let animationId;
let isScrolling = true;

function autoScroll() {
    if (!isScrolling) return;

    scrollPosition += scrollSpeed;
    // Если дошли до конца - возвращаемся в начало
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    console.log('Scroll position:', scrollPosition, 'Max scroll:', maxScroll); // Отладка

    if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.scrollLeft = scrollPosition;
    }

    animationId = requestAnimationFrame(autoScroll);
}

// Запускаем автоскролл когда страница загрузится
window.addEventListener('load', () => {
    console.log('Page loaded, scrollContainer:', scrollContainer); // Отладка
    if (scrollContainer) {
        console.log('Container width:', scrollContainer.scrollWidth, 'Client width:', scrollContainer.clientWidth); // Отладка
        autoScroll();
    } else {
        console.error('Scroll container not found!');
    }
});

// Пауза при наведении
scrollContainer.addEventListener('mouseenter', () => {
    isScrolling = false;
    cancelAnimationFrame(animationId);
});

// Продолжаем когда мышь убрали
scrollContainer.addEventListener('mouseleave', () => {
    isScrolling = true;
    autoScroll();
});

// Добавляем для мобильных устройств
scrollContainer.addEventListener('touchstart', () => {
    isScrolling = false;
    cancelAnimationFrame(animationId);
});

scrollContainer.addEventListener('touchend', () => {
    isScrolling = true;
    autoScroll();
});