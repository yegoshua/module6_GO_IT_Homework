const buttons = document.querySelectorAll("button");
const [decrement, increment] = buttons;
const number = document.getElementById("value");
let counterValue = 0;

number.innerText = counterValue;

decrement.addEventListener("click", () => {
  number.innerText = --counterValue;
});

increment.addEventListener("click", () => {
  number.innerText = ++counterValue;
});
