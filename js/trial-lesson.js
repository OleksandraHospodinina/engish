// Отримуємо елементи форми та кнопки відправки
const form = document.querySelector("form");
const nameInput = document.getElementById("trial-name");
const phoneInput = document.getElementById("trial-phone");
const errorMessageElements = document.querySelectorAll(".trial__error-message");
const submitButton = document.querySelector("button[type='submit']");

// Функція показу помилки
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    const small = formGroup.querySelector(".trial__error-message");
    small.innerText = message;
    small.style.display = 'inline-block';
}

// Функція показу успіху
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    const small = formGroup.querySelector(".trial__error-message");
    small.innerText = "";
    small.style.display = 'none';
}

// Функція перевірки ім'я
function checkName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
        showError(nameInput, "Введіть ім'я");
        return false;
    } else {
        showSuccess(nameInput);
        return true;
    }
}

// Функція перевірки номера телефону
function checkPhone() {
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneValue)) {
        showError(phoneInput, "Номер телефону повинен містити 10 цифр");
        return false;
    } else {
        showSuccess(phoneInput);
        return true;
    }
}

// Функція валідації форми
function validateForm() {
    let isValid = true;

    if (!checkName()) {
        isValid = false;
    }

    if (!checkPhone()) {
        isValid = false;
    }

    return isValid;
}

// Обробник події відправки форми
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        form.submit();
    }
});

// Обробники подій для перевірки полів форми під час введення
nameInput.addEventListener("input", checkName);
phoneInput.addEventListener("input", checkPhone);

// Перевірка форми при завантаженні сторінки
validateForm();
