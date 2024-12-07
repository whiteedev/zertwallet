// Функция для подгрузки контента без перезагрузки страницы
function loadPage(page) {
    fetch(page) // Получаем контент с файла (например, home.html)
        .then(response => response.text()) // Преобразуем ответ в текст
        .then(data => {
            // Вставляем полученный контент в основной блок
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке страницы:', error);
        });
}

// Загружаем домашнюю страницу по умолчанию
loadPage('home.html');
