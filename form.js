const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;

  const questionCard = formElements.your_question.value;
  const answerCard = formElements.your_answer.value;
  const tagCard = formElements.tag.value;

  const newSection = document.createElement("section");
  test.append(newSection);

  newSection.innerHTML = `
<section class="question-card" data-js="question-cards">
        <div class="question-card__card --card_1">
          <span class="material-symbols-outlined" data-js="bookmark-question1">
            bookmark
          </span>
          <p><b>${questionCard}?</b></p>

          <button>Show Answer</button>
          <div class="show hidden" data-js="show">${answerCard}</div>

          <ul class="categories">
            <li>${tagCard}</li>
          </ul>
        </div>
`;
});
