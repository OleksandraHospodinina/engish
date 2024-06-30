const form = document.querySelector("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submitButton = form.querySelector(".schedule__submit");

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    const small = formGroup.querySelector(".error-message");
    small.innerText = message;
    small.style.display = 'inline-block';
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    const small = formGroup.querySelector(".error-message");
    small.innerText = "";
    small.style.display = 'none';
}

function checkNameLength() {
    const inputValue = name.value.trim();
    if (inputValue.length < 3 || inputValue.length > 30) {
        showError(name, "Ім'я повинно бути від 3 до 30 символів");
        return false;
    } else {
        showSuccess(name);
        return true;
    }
}

function checkPhoneNumberFormat() {
    const inputValue = phone.value.trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(inputValue)) {
        showError(phone, "Номер телефону повинен складатися з 10 цифр");
        return false;
    } else {
        showSuccess(phone);
        return true;
    }
}

function checkEmailFormat() {
    const inputValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
        showError(email, "Некоректна електронна адреса");
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

name.addEventListener("input", function () {
    validateForm();
});

phone.addEventListener("input", function () {
    validateForm();
});

email.addEventListener("input", function () {
    validateForm();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkNameLength() && checkPhoneNumberFormat() && checkEmailFormat()) {
        form.submit();
    }
});

function validateForm() {
    if (checkNameLength() && checkPhoneNumberFormat() && checkEmailFormat()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

validateForm();
