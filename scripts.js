document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");
    const titles = document.querySelectorAll("h2");

    function revealOnScroll() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
                titles[index].classList.add("visible"); // Добавляем класс заголовку
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Запускаем на старте, если блоки уже в зоне видимости
});
