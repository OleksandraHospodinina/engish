const form = document.querySelector("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const submitButton = form.querySelector(".form-button button");

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    const small = formGroup.querySelector(".error-message");
    small.innerText = message;
    small.style.display = 'inline-block'; // Відображаємо помилку
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    const small = formGroup.querySelector(".error-message");
    small.innerText = "";
    small.style.display = 'none'; // Приховуємо помилку
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

name.addEventListener("input", function () {
    validateForm();
});

phone.addEventListener("input", function () {
    validateForm();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkNameLength() && checkPhoneNumberFormat()) {
        form.submit();
    }
});

function validateForm() {
    if (checkNameLength() && checkPhoneNumberFormat()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

validateForm();
