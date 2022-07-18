const textInput = document.getElementById("validation-input");

const inputChange = (event) => {
  textInput.innerText = event.target.value;
};

textInput.addEventListener("input", inputChange);

textInput.addEventListener("blur", (e) => {
  const text = e.target.value;
  if (text.length === +textInput.dataset.length) {
    textInput.className = "valid";
  } else {
    textInput.className = "invalid";
  }
});
