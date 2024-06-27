const kidsTitle = document.querySelector(".kids__title");
const adultsTitle = document.querySelector(".adults__title");

const kidsSection = document.querySelector(".format__container.kids");
const adultsSection = document.querySelector(".format__container.adults");

kidsTitle.addEventListener("click", function () {
  kidsSection.style.display = "block";
  adultsSection.style.display = "none";
  
  kidsTitle.classList.add("active-title");
  adultsTitle.classList.remove("active-title");
});

adultsTitle.addEventListener("click", function () {
  kidsSection.style.display = "none";
  adultsSection.style.display = "block";
  
  adultsTitle.classList.add("active-title");
  kidsTitle.classList.remove("active-title");
});

kidsSection.style.display = "block";
adultsSection.style.display = "none";
kidsTitle.classList.add("active-title");
