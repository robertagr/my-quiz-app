const bookmarkQuestion1 = document.querySelector("span");
bookmarkQuestion1.addEventListener("click", () => {
  bookmarkQuestion1.classList.toggle("selected");
});

const button = document.querySelector("button");
const showAnswer = document.querySelector('[ data-js="show"]');

button.addEventListener("click", () => {
  const initialText = "Show Answer";
  showAnswer.classList.toggle("hidden");

  if (button.textContent.includes(initialText)) {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = initialText;
  }
});

// FORM
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Read the entered data from the input fields
  const answerInput = document.getElementById("your-answer");
  const questionInput = document.getElementById("your-question");
  const tagsInput = document.getElementById("tags");

  const answerText = answerInput.value;
  const questionText = questionInput.value;
  const tagsText = tagsInput.value;
});
