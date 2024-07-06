function init() {
  import("./formats.js");
  import("./reviews.js");
  import("./consultation-form.js");
  import("./promotion.js");
  import("./trial-lesson.js");
  import("./price.js");
  import("./promotion-sale.js");
  import("./language.js");
  import("./header-burger-menu.js");
  import("./consultation-form-eng.js");
  import("./price-eng.js");
  import("./promotion-eng.js");
  import("./promotion-sale-eng.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
