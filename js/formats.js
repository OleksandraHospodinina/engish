const kidsTitle = document.querySelector(".kids__title");
const adultsTitle = document.querySelector(".adults__title");

const kidsSection = document.querySelector(".format__container.kids");
const adultsSection = document.querySelector(".format__container.adults");

kidsTitle.addEventListener("click", function () {
  kidsSection.style.display = "block";
  adultsSection.style.display = "none";
});

adultsTitle.addEventListener("click", function () {
  kidsSection.style.display = "none";
  adultsSection.style.display = "block";
});

kidsSection.style.display = "block";
adultsSection.style.display = "none";
