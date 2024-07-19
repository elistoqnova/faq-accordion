const questionItems = document.querySelectorAll(".question-item");

questionItems.forEach(questionItem => {
  const header = questionItem.querySelector(".question-item-header");
  const answer = questionItem.querySelector(".question-item-body");
  const plusIcon = header.querySelector(".visible");
  const minusIcon = header.querySelector(".invisible");

  header.addEventListener("click", () => {
    if (answer.classList.contains("visible")) {
      answer.classList.remove("visible");
      plusIcon.classList.add("visible");
      plusIcon.classList.remove("invisible");
      minusIcon.classList.add("invisible");
      minusIcon.classList.remove("visible");
    } else {
      answer.classList.add("visible");
      plusIcon.classList.remove("visible");
      plusIcon.classList.add("invisible");
      minusIcon.classList.remove("invisible");
      minusIcon.classList.add("visible");
    }
  });
});

