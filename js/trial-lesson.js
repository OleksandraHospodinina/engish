const form = document.querySelector(".trial-lesson__form-container");
const nameInput = document.getElementById("trial-name");
const phoneInput = document.getElementById("trial-phone");
const submitButton = form.querySelector('button[type="submit"]');

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
  const errorMessage = formGroup.querySelector(".trial__error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "inline-block";
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  formGroup.classList.add("success");
  const errorMessage = formGroup.querySelector(".trial__error-message");
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

function checkName() {
  const nameValue = nameInput.value.trim();
  if (
    nameValue.length < 3 ||
    nameValue.length > 30 ||
    !/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+$/.test(nameValue)
  ) {
    showError(nameInput, "Ім'я повинно містити від 3 до 30 літер");
    return false;
  } else {
    showSuccess(nameInput);
    return true;
  }
}

function checkPhoneNumber() {
  const phoneValue = phoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneValue)) {
    showError(phoneInput, "Номер телефону повинен складатися з 10 цифр");
    return false;
  } else {
    showSuccess(phoneInput);
    return true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (checkName() && checkPhoneNumber()) {
    form.submit();
  }
});

nameInput.addEventListener("input", checkName);
phoneInput.addEventListener("input", checkPhoneNumber);
