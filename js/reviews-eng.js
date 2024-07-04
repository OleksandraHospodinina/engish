const reviews = [
  {
    name: "Andrii",
    image: "img/reviews/andrii.png",
    text: "Teachers at English Spirit school are very professional and qualified. They create a pleasant and friendly atmosphere, which allows students to feel confident and comfortable during their studies. Each lesson was well-planned and structured, which helped me effectively absorb new material.",
    moreText:
      "The school offers a variety of English language learning programs that allow students to choose a course that best suits their goals and language level. Additionally, the teaching materials used at the school are always current and interesting. I want to note that after completing the course, my English language skills significantly improved. I can now communicate in English freely and easily understand native speakers.",
  },
  {
    name: "Vladyslav",
    image: "img/reviews/vladyslav.png",
    text: "I was a student at English Spirit school for several months, and I can confidently say it was an unforgettable and very beneficial time for me. Teachers at English Spirit were very friendly and made me feel comfortable in class.",
    moreText:
      "They used various teaching methods to make lessons interesting and engaging, which helped me better understand and speak English confidently. I especially liked how the teaching materials at the school were structured. They were easily accessible and included many practical exercises that helped me absorb material and reinforce new knowledge. Furthermore, I appreciated the opportunity to communicate with other students in English. It was very beneficial for me as I could practice my English in an informal setting and learn to speak more freely. In conclusion, thanks to English Spirit school, I have significantly improved my English language skills and feel confident using it in everyday life.",
  },
  {
    name: "Valeria",
    image: "img/reviews/valeria.png",
    text: "I have been traveling around the world for several years and always dreamed of learning English so that communication would not be a barrier for me. When I visited English Spirit school, I realized it was the best decision I could make.",
    moreText:
      "I was very impressed with the quality of teaching and the professionalism of the teachers at the school. They were experienced and caring, always ready to help me. I liked how they structured their lessons, including a combination of different teaching methods such as watching shows, listening to podcasts, discussing absolutely all the interesting topics for me, and learning to communicate through SMS. This helped me better understand the language and quickly absorb new material.",
  },
  {
    name: "Oleh",
    image: "img/reviews/oleh.png",
    text: "I am very satisfied with my learning experience at English Spirit school. I work in the IT field, and it has always been necessary for me to have good English language skills to communicate with international colleagues and clients.",
    moreText:
      "English Spirit school provided me with the opportunity to study English at a high level and improve my professional skills. School teachers were professionals in their field and created interesting and exciting lessons. They used modern teaching methodologies to help me better understand grammar and English language rules. Moreover, they also provided me with numerous opportunities to practice spoken language, which was very important for my work.",
  },
  {
    name: "Nikita",
    image: "img/reviews/nikita.png",
    text: "I am very happy that my parents enrolled me in English Spirit school to prepare for the English language SAT. Thanks to the professionalism of the teachers and the individual approach to each student, I was able to successfully pass the SAT with a score of 194.",
    moreText:
      "The lessons at the school were interesting and exciting. Teachers used various teaching methods to help me better understand grammar and English language rules. They also provided me with numerous opportunities to practice spoken language, which was crucial for successfully passing the exam. I especially liked that teachers at the school focused not only on theory but also on the practical application of knowledge. They taught me to use the language in real life, not just on the exam. Thanks to this, I was able to better understand English and use it in everyday life.",
  },
];

let currentIdx = 0;

function renderReviews() {
  const slidesContainer = document.querySelector(".reviews__slides");
  slidesContainer.innerHTML = reviews
    .map(
      (review, idx) => `
        <div class="reviews__slide ${
          isActive(idx) ? "reviews__slide--active" : ""
        }">
            <div class="background-wrapper">
                <div class="background" style="background: rgb(245, 245, 245)">
                    <img src="${review.image}" alt="Фото користувача ${
        review.name
      }" class="reviews__photo" />
                    <p class="reviews__name">${review.name}</p>
                    <p>
                        ${review.text}
                        <span class="more" onclick="toggleReadMore(${idx})">Read more...</span>
                        <span class="more-text" id="more-text-${idx}" style="display: none;">${
        review.moreText
      }</span>
                    </p>
                </div>
            </div>
        </div>
    `
    )
    .join("");
  updateIndicators();
}

function isActive(idx) {
  return idx === currentIdx || idx === (currentIdx + 1) % reviews.length;
}

function updateSlide() {
  const slides = document.querySelectorAll(".reviews__slide");
  slides.forEach((slide, idx) => {
    slide.classList.remove("reviews__slide--active");
    if (isActive(idx)) {
      slide.classList.add("reviews__slide--active");
    }
  });
  updateIndicators();
}

function moveSlide(step) {
  currentIdx = (currentIdx + step + reviews.length) % reviews.length;
  updateSlide();
}

function moveToSlide(index) {
  currentIdx = index;
  updateSlide();
}

function toggleReadMore(idx) {
  const moreText = document.getElementById(`more-text-${idx}`);
  moreText.style.display =
    moreText.style.display === "none" || moreText.style.display === ""
      ? "block"
      : "none";
  const button = document.querySelector(`.reviews__slide--active .more`);
  button.textContent =
    moreText.style.display === "block" ? "Roll up" : "Read more...";
}

function updateIndicators() {
  const indicatorsContainer = document.querySelector(".reviews__indicators");
  indicatorsContainer.innerHTML = reviews
    .map(
      (review, idx) => `
        <div class="reviews__indicator ${
          isActive(idx) ? "reviews__indicator--active" : ""
        }" onclick="moveToSlide(${idx})"></div>
    `
    )
    .join("");
}

renderReviews();
updateSlide();
