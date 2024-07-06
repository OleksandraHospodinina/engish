const moreButtons = document.querySelectorAll("#more");

moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const moreText = button.parentElement.nextElementSibling;

    if (moreText) {
      const computedStyle = window.getComputedStyle(moreText);
      if (computedStyle.display === "none" || moreText.hidden) {
        moreText.hidden = false; // або встановлення класу CSS для видимості
        button.textContent = "Згорнути";
      } else {
        moreText.hidden = true; // або встановлення класу CSS для приховання
        button.textContent = "Читати більше...";
      }
    }
  });
});
