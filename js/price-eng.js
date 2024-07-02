let exchangeRates = {};

async function loadExchangeRates() {
  try {
    let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    let data = await response.json();
    exchangeRates = data.rates;
    changeCurrency();
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

function updatePrices(rate = 1, currencySymbol = "$") {
  document.querySelectorAll(".price__item").forEach((item) => {
    item.querySelectorAll(".item__price").forEach((priceElement) => {
      let priceInUAH = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));
      let priceInUSD = priceInUAH / exchangeRates["UAH"];
      let convertedPrice = (priceInUSD * rate).toFixed(2);
      priceElement.textContent = `${currencySymbol}${convertedPrice}`;
    });
  });
}

async function loadProducts() {
  try {
    const response = await fetch("./api/price-eng.json");
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

function renderProducts(products) {
  const priceContainer = document.querySelector(".price__container");
  priceContainer.innerHTML = ""; 
  products.lessons.forEach((lesson) => {
    let lessonElement = document.createElement("div");
    lessonElement.classList.add("price__item");
    lessonElement.innerHTML = `<h3 class="price__item-title">${lesson.title}</h3>`;
    lesson.prices.forEach((price) => {
      lessonElement.innerHTML += `<p class="price__item-description">${price.pack}<span class="item__price">${price.price}</span></p>`;
    });
    priceContainer.appendChild(lessonElement);
  });
}

async function changeCurrency() {
  if (!Object.keys(exchangeRates).length) {
    await loadExchangeRates();
  }
  const convertTo = document.getElementById("price-list__currency").value;
  const rate = exchangeRates[convertTo];
  let currencySymbol;
  switch (convertTo) {
    case "UAH":
      currencySymbol = "₴";
      break;
    case "USD":
      currencySymbol = "$";
      break;
  }
  updatePrices(rate, currencySymbol);
}

document.getElementById("price-list__currency").addEventListener("change", changeCurrency);

loadProducts();
loadExchangeRates();
