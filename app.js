const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // *2d를 쓰겠다
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

function onClick(event) {
  ctx.beginPath();
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomX = Math.floor(Math.random() * canvas.width);
  const randomY = Math.floor(Math.random() * canvas.height);
  const color = colors[randomNumber];
  ctx.moveTo(randomX, randomY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
