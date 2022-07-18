function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
console.log();
changeColorBtn.addEventListener("click", (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.innerText = getRandomHexColor();
});
