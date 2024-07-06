let splide;

function initSplide() {
  const isMobile = window.innerWidth <= 768;

  if (splide) {
    splide.destroy();
  }

  const perPage = isMobile ? 1 : 2;

  splide = new Splide(".splide", {
    type: 'loop',
    perPage: perPage,
    gap: '20px'
  });

  splide.mount();
}

initSplide();

window.addEventListener('resize', () => {
  initSplide();
});
