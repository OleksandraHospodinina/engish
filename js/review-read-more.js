const moreButtons = document.querySelectorAll("#more");

moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const moreText = button.parentElement.nextElementSibling;

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      button.textContent = "Згорнути";
    } else {
      moreText.style.display = "none";
      button.textContent = "Читати більше...";
    }
  });
});
