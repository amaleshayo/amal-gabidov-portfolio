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
  
// Таймер до начала проекта
const keksogramCountdown = document.getElementById('keksogramCountdown');

const now = new Date();
const keksogramStartDate = new Date();


keksogramStartDate.setDate(now.getDate() + 1);
keksogramStartDate.setHours(10, 0, 0, 0);

function updateKeksogramCountdown() {
    const now = new Date(); 
    const diff = keksogramStartDate - now;

    if (diff <= 0) {
        keksogramCountdown.textContent = 'Проект начался!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    keksogramCountdown.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}

// Обновляем таймер каждую секунду
setInterval(updateKeksogramCountdown, 1000);
updateKeksogramCountdown();
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
  