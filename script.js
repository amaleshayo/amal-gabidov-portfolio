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
  
// Получаем элемент таймера
const projectCountdown = document.getElementById('projectCountdown');

// Устанавливаем даты
const startDate = new Date('2025-02-11T00:00:00');
const endDate = new Date('2025-04-14T23:59:59');

function updateProjectCountdown() {
    const now = new Date();

    if (now < startDate) {
        const diff = startDate - now;
        projectCountdown.textContent = `Старт через: ${formatTime(diff)}`;
    } 
    else if (now >= startDate && now < endDate) {
        const diff = endDate - now;
        projectCountdown.innerHTML = `Проект в процессе!<br>Оставшееся время: ${formatTime(diff)}`;
    } 
    else {
        projectCountdown.textContent = 'Проект завершён!';
    }
}

// Функция форматирования времени
function formatTime(diff) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Запускаем таймер и обновляем каждую секунду
setInterval(updateProjectCountdown, 1000);
updateProjectCountdown();

  // СМЕНИТЬ ТЕМУ
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
  