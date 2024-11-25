const canvas = document.getElementById('business-card');
const ctx = canvas.getContext('2d');

// Установим начальный фон
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Изменение цвета фона
document.getElementById('background-color').addEventListener('input', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Добавление текста с изменением цвета
document.getElementById('add-text').addEventListener('click', () => {
    const text = prompt('Введите текст для визитки:');
    if (text) {
        const textElement = {
            type: 'text',
            content: text,
            color: document.getElementById('text-color').value || '#000000',
            x: canvas.width / 2, // Начальная позиция текста
            y: canvas.height / 2, // Начальная позиция текста
            font: '20px Arial',
        };
        elements.push(textElement); // Сохраняем элемент в массиве
        drawCanvas(); // Перерисовываем холст
    }
});

// Загрузка логотипа с изменением размеров
document.getElementById('upload-logo').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                const logoWidth = parseInt(document.getElementById('logo-width').value, 10) || 100;
                const logoHeight = parseInt(document.getElementById('logo-height').value, 10) || 50;

                const logoElement = {
                    type: 'image',
                    image: img,
                    x: (canvas.width - logoWidth) / 2, // Начальная позиция
                    y: (canvas.height - logoHeight) / 2, // Начальная позиция
                    width: logoWidth,
                    height: logoHeight,
                };
                elements.push(logoElement); // Сохраняем элемент в массиве
                drawCanvas(); // Перерисовываем холст
            };
        }
    };

    input.click();
});


// Скачивание PNG
document.getElementById('download').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'business-card.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Массив для хранения всех элементов
const elements = [];

// Функция для перерисовки холста
function drawCanvas() {
    // Очищаем холст
    ctx.fillStyle = document.getElementById('background-color').value || '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем каждый элемент
    elements.forEach((element) => {
        if (element.type === 'text') {
            ctx.fillStyle = element.color;
            ctx.font = element.font;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(element.content, element.x, element.y);
        } else if (element.type === 'image') {
            ctx.drawImage(element.image, element.x, element.y, element.width, element.height);
        }
    });
}

let draggingElement = null;
let offsetX = 0;
let offsetY = 0;

// Обработчик нажатия мыши
canvas.addEventListener('mousedown', (e) => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    // Проверяем, нажали ли на элемент
    elements.forEach((element) => {
        if (element.type === 'text') {
            const textWidth = ctx.measureText(element.content).width;
            const textHeight = parseInt(element.font, 10);
            if (
                mouseX >= element.x - textWidth / 2 &&
                mouseX <= element.x + textWidth / 2 &&
                mouseY >= element.y - textHeight / 2 &&
                mouseY <= element.y + textHeight / 2
            ) {
                draggingElement = element;
                offsetX = mouseX - element.x;
                offsetY = mouseY - element.y;
            }
        } else if (element.type === 'image') {
            if (
                mouseX >= element.x &&
                mouseX <= element.x + element.width &&
                mouseY >= element.y &&
                mouseY <= element.y + element.height
            ) {
                draggingElement = element;
                offsetX = mouseX - element.x;
                offsetY = mouseY - element.y;
            }
        }
    });
});

// Обработчик движения мыши
canvas.addEventListener('mousemove', (e) => {
    if (draggingElement) {
        draggingElement.x = e.offsetX - offsetX;
        draggingElement.y = e.offsetY - offsetY;
        drawCanvas();
    }
});

// Обработчик отпускания мыши
canvas.addEventListener('mouseup', () => {
    draggingElement = null;
});

