const inputBar = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

const inputChange = (event) => {
  const fs = event.target.value;
  textSpan.style.fontSize = `${fs}px`;
  console.log(textSpan.style.fontSize);
};
inputBar.addEventListener("input", inputChange);
