const inputName = document.getElementById("name-input");
const nameSpan = document.getElementById("name-output");

console.log(inputName);

const inputChange = (event) => {
  nameSpan.innerText = event.target.value;
  if (nameSpan.innerText === "") {
    nameSpan.innerText = "Anonymus";
  }
};

inputName.addEventListener("input", inputChange);
