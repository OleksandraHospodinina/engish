let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.reviews__slide');
    const indicators = document.querySelectorAll('.reviews__indicator');
    const totalSlides = slides.length;

    slides.forEach(slide => slide.classList.remove('reviews__slide--active'));
    indicators[Math.floor(currentSlide / 2)].classList.remove('reviews__indicator--active');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('reviews__slide--active');
    slides[(currentSlide + 1) % totalSlides].classList.add('reviews__slide--active');
    indicators[Math.floor(currentSlide / 2)].classList.add('reviews__indicator--active');
}

function moveToSlide(index) {
    const slides = document.querySelectorAll('.reviews__slide');
    const indicators = document.querySelectorAll('.reviews__indicator');

    slides.forEach(slide => slide.classList.remove('reviews__slide--active'));
    indicators[Math.floor(currentSlide / 2)].classList.remove('reviews__indicator--active');

    currentSlide = index * 2;

    slides[currentSlide].classList.add('reviews__slide--active');
    slides[(currentSlide + 1) % slides.length].classList.add('reviews__slide--active');
    indicators[index].classList.add('reviews__indicator--active');
}

window.addEventListener('load', () => {
    const slides = document.querySelectorAll('.reviews__slide');
    slides[currentSlide].classList.add('reviews__slide--active');
    slides[(currentSlide + 1) % slides.length].classList.add('reviews__slide--active');
});
