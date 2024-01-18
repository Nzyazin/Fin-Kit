const buttons = document.querySelectorAll('.language-button');
console.log(buttons);
// Добавление обработчика событий клика для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Сначала удаляем класс 'clicked' со всех кнопок
        buttons.forEach(btn => btn.classList.remove('clicked'));
        console.log('S');
        // Затем добавляем класс 'clicked' только к той кнопке, на которую нажали
        this.classList.add('clicked');
    });
});