const quotes = [
  "Elegancia en cada paso.",
  "El misterio también puede ser hermoso.",
  "Los gatos negros son símbolo de personalidad y encanto.",
  "La noche se vuelve arte cuando pasa un gato negro.",
];

const quoteElement = document.querySelector("#cat-quote");
const quoteButton = document.querySelector("#quote-button");

let quoteIndex = 0;

const showNextQuote = () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[quoteIndex];

  quoteElement.classList.add("is-changing");
  quoteButton.classList.remove("is-glowing");

  requestAnimationFrame(() => {
    quoteButton.classList.add("is-glowing");
  });

  window.setTimeout(() => {
    quoteElement.classList.remove("is-changing");
    quoteButton.classList.remove("is-glowing");
  }, 560);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Black Cat page loaded successfully");

  if (quoteButton && quoteElement) {
    quoteButton.addEventListener("click", showNextQuote);
  }
});
