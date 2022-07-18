function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divForBlocks = document.getElementById("boxes");
const numberInput = document.querySelector('input[type="number"]');
const [createBtn, destroyBtn] = document.querySelectorAll(
  'button[type="button"]'
);

const destroyBoxes = () => {
  [...divForBlocks.children].forEach((el) => el.remove());
};

const createBoxes = (amount) => {
  for (let i = 0; i <= amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    divForBlocks.append(div);
  }
};

createBtn.addEventListener("click", (e) => {
  createBoxes(numberInput.value);
});
destroyBtn.addEventListener("click", destroyBoxes);
