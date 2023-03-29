// Обработчик клика по ссылкам в меню
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const sectionId = this.getAttribute('href'); // Получаем id секции, на которую ссылается ссылка
    const section = document.querySelector(sectionId); // Находим секцию на странице
    section.scrollIntoView({behavior: "smooth"}); // Прокручиваем страницу к секции с плавной анимацией
  });
});
// Обработчик наведения мыши на проекты
const projectLinks = document.querySelectorAll('li a');
projectLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#007bff'; // Изменяем цвет фона ссылки на синий при наведении мыши
    this.style.color = '#fff'; // Изменяем цвет текста ссылки на белый при наведении мыши
  });
  link.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#eee'; // Возвращаем исходный цвет фона ссылки при уходе мыши
    this.style.color = '#333'; // Возвращаем исходный цвет текста ссылки при уходе мыши
  });
});