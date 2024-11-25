// Создаем объект QRCode
let qrcode = new QRCode(document.querySelector(".qrcode"), {
  width: 200,
  height: 200,
});

// Функция для обновления QR-кода
function updateQRCode() {
  let input = document.querySelector("input").value.trim();

  if (input === "") {
    alert("Input field is empty");
  } else {
    qrcode.makeCode(input);
  }
}
