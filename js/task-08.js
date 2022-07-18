const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("всі поля повинні бути заповнені");
  } else {
    console.log({ email: email.value, password: password.value });
    return { email: email.value, password: password.value };
  }

  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
