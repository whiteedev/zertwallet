// Функция для подгрузки контента без перезагрузки страницы
function loadPage(page) {
    fetch(page) // Получаем контент с файла (например, home.html)
        .then(response => response.text()) // Преобразуем ответ в текст
        .then(data => {
            // Вставляем полученный контент в основной блок
            document.getElementById('content').innerHTML = data;

            // Обновляем активную кнопку
            updateActiveNavItem(page);
        })
        .catch(error => {
            console.error('Ошибка при загрузке страницы:', error);
        });
}

// Функция для обновления активной кнопки навигации
function updateActiveNavItem(page) {
    // Убираем класс active у всех кнопок
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Добавляем класс active к кнопке, соответствующей текущей странице
    if (page === 'home.html') {
        document.getElementById('home-btn').classList.add('active');
    } else if (page === 'stories.html') {
        document.getElementById('stories-btn').classList.add('active');
    } else if (page === 'settings.html') {
        document.getElementById('settings-btn').classList.add('active');
    }
}

// Загружаем домашнюю страницу по умолчанию
loadPage('home.html');
