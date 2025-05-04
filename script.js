// Смена текста на главной
const descriptionText = document.getElementById('descriptionText');

const descriptions = [
    "Каждая строка моего кода — это шаг к созданию современного, удобного и эстетичного веб-пространства. Люблю превращать идеи в живую реальность.",
    "Код — моя палитра, браузер — моё полотно. Создаю впечатляющие пользовательские интерфейсы, которые работают быстро и выглядят прекрасно."
];

let currentIndex = 0;

function toggleDescription() {
    currentIndex = (currentIndex + 1) % descriptions.length;
    descriptionText.style.opacity = 0;
    setTimeout(() => {
        descriptionText.textContent = descriptions[currentIndex];
        descriptionText.style.opacity = 1;
    }, 300);
}

descriptionText.addEventListener('mouseover', toggleDescription);

// Универсальная функция форматирования времени
function formatTime(diff) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Таймер для проекта "Six Cities"
const sixCitiesCountdown = document.getElementById('sixCitiesCountdown');

if (sixCitiesCountdown) {
    const sixCitiesStart = new Date('2025-05-04T00:00:00');
    const sixCitiesEnd = new Date('2025-06-15T23:59:59');

    function updateSixCitiesCountdown() {
        const now = new Date();

        if (now < sixCitiesStart) {
            const diff = sixCitiesStart - now;
            sixCitiesCountdown.textContent = `Старт через: ${formatTime(diff)}`;
        } else if (now >= sixCitiesStart && now < sixCitiesEnd) {
            const diff = sixCitiesEnd - now;
            sixCitiesCountdown.innerHTML = `Проект в процессе!<br>Оставшееся время: ${formatTime(diff)}`;
        } else {
            sixCitiesCountdown.textContent = 'Проект завершён!';
        }
    }

    setInterval(updateSixCitiesCountdown, 1000);
    updateSixCitiesCountdown();
}

// Смена темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.themes');
    const heroImage = document.getElementById('heroImage');

    const updateHeroImage = () => {
        if (themeToggle.value === 'dark') {
            heroImage.src = 'images/index-images/amal2.jpg';
        } else {
            heroImage.src = 'images/index-images/amal3.jpg';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeToggle.value = savedTheme;
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        updateHeroImage();
    }

    themeToggle.addEventListener('change', () => {
        const selectedTheme = themeToggle.value;
        document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
        localStorage.setItem('theme', selectedTheme);
        updateHeroImage();
    });
});
