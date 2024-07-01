const promotionForm = document.querySelector(".promotion__form form");
const promotionNameInput = promotionForm.querySelector("#promotion-name");
const promotionPhoneInput = promotionForm.querySelector("#promotion-phone");
const promotionEmailInput = promotionForm.querySelector("#promotion-email");
const promotionTelegramInput = promotionForm.querySelector(
  "#promotion-telegram"
);

function promotionShowError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("promotion__error");
  formGroup.classList.remove("promotion__success");
  const errorMessage = formGroup.querySelector(".promotion__error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "inline-block";
}

function promotionShowSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("promotion__error");
  formGroup.classList.add("promotion__success");
  const errorMessage = formGroup.querySelector(".promotion__error-message");
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

function promotionCheckName() {
  const nameValue = promotionNameInput.value.trim();
  if (
    nameValue.length < 3 ||
    nameValue.length > 30 ||
    !/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+$/.test(nameValue)
  ) {
    promotionShowError(
      promotionNameInput,
      "Ім'я повинно містити від 3 до 30 літер"
    );
    return false;
  } else {
    promotionShowSuccess(promotionNameInput);
    return true;
  }
}

function promotionCheckPhoneNumber() {
  const phoneValue = promotionPhoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneValue)) {
    promotionShowError(
      promotionPhoneInput,
      "Номер телефону повинен складатися з 10 цифр"
    );
    return false;
  } else {
    promotionShowSuccess(promotionPhoneInput);
    return true;
  }
}

function promotionCheckEmail() {
  const emailValue = promotionEmailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    promotionShowError(
      promotionEmailInput,
      "Введіть коректну адресу електронної пошти"
    );
    return false;
  } else {
    promotionShowSuccess(promotionEmailInput);
    return true;
  }
}

function promotionCheckTelegram() {
  promotionShowSuccess(promotionTelegramInput);
  return true;
}

promotionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    promotionCheckName() &&
    promotionCheckPhoneNumber() &&
    promotionCheckEmail() &&
    promotionCheckTelegram()
  ) {
    promotionForm.submit();
  }
});

promotionNameInput.addEventListener("input", promotionCheckName);
promotionPhoneInput.addEventListener("input", promotionCheckPhoneNumber);
promotionEmailInput.addEventListener("input", promotionCheckEmail);
promotionTelegramInput.addEventListener("input", promotionCheckTelegram);
