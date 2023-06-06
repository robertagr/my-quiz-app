const bookmarkQuestion1 = document.querySelector("span");
bookmarkQuestion1.addEventListener("click", () => {
  bookmarkQuestion1.classList.toggle("selected");
});

const button = document.querySelector("button");
const showAnswer = document.querySelector('[data-js="show"]');

button.addEventListener("click", () => {
  const initialText = "Show Answer";
  showAnswer.classList.toggle("card-answer--active");
  if (button.textContent.includes(initialText)) {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = initialText;
  }
});
