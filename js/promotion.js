const form = document.querySelector("form");
const name = document.getElementById("promotion-name");
const phone = document.getElementById("promotion-phone");
const email = document.getElementById("promotion-email");
const telegram = document.getElementById("promotion-telegram");
const submitButton = form.querySelector("button[type=submit]");

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    const small = formGroup.querySelector(".promotion__error-message");
    small.innerText = message;
    small.style.display = 'inline-block';
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    const small = formGroup.querySelector(".promotion__error-message");
    small.innerText = "";
    small.style.display = 'none';
}

function checkName() {
    const inputValue = name.value.trim();
    if (inputValue === "") {
        showError(name, "Введіть ім'я");
        return false;
    } else {
        showSuccess(name);
        return true;
    }
}

function checkPhoneNumber() {
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

function checkEmail() {
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

// Телеграм - необов'язкове поле, тому валідація не потрібна

name.addEventListener("blur", checkName);
phone.addEventListener("blur", checkPhoneNumber);
email.addEventListener("blur", checkEmail);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (checkName() && checkPhoneNumber() && checkEmail()) {
        form.submit();
    }
});
