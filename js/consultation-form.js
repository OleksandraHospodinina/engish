const consultationForm = document.querySelector(".consultation-item-2");
const consultationNameInput =
  consultationForm.querySelector("#consultation-name");
const consultationPhoneInput = consultationForm.querySelector(
  "#consultation-phone"
);

function consultationShowError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("consultation__error");
  formGroup.classList.remove("consultation__success");
  const errorMessage = formGroup.querySelector(".consultation__error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "inline-block";
}

function consultationShowSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("consultation__error");
  formGroup.classList.add("consultation__success");
  const errorMessage = formGroup.querySelector(".consultation__error-message");
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

function consultationCheckName() {
  const nameValue = consultationNameInput.value.trim();
  if (
    nameValue.length < 3 ||
    nameValue.length > 30 ||
    !/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+$/.test(nameValue)
  ) {
    consultationShowError(
      consultationNameInput,
      "Ім'я повинно містити від 3 до 30 літер"
    );
    return false;
  } else {
    consultationShowSuccess(consultationNameInput);
    return true;
  }
}

function consultationCheckPhoneNumber() {
  const phoneValue = consultationPhoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneValue)) {
    consultationShowError(
      consultationPhoneInput,
      "Номер телефону повинен складатися з 10 цифр"
    );
    return false;
  } else {
    consultationShowSuccess(consultationPhoneInput);
    return true;
  }
}

consultationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (consultationCheckName() && consultationCheckPhoneNumber()) {
    consultationForm.submit();
  }
});

consultationNameInput.addEventListener("input", consultationCheckName);
consultationPhoneInput.addEventListener("input", consultationCheckPhoneNumber);
