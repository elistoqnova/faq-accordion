const questionOne = document.querySelector(".question-one");
const questionTwo = document.querySelector(".question-two");
const questionThree = document.querySelector(".question-three");
const questionFour = document.querySelector(".question-four");

let number;

questionOne.addEventListener("click", () => {
  number = 1;
  questionAnswer(number)
});
questionTwo.addEventListener("click", () => {
  number = 2;
  questionAnswer(number)
});
questionThree.addEventListener("click", () => {
  number = 3;
  questionAnswer(number)
});
questionFour.addEventListener("click", () => {
  number = 4;
  questionAnswer(number);
});

function questionAnswer (number) {
    if (number === 1 ) {
        const answer = document.getElementById('one');
        answer.classList.toggle("visible");
    } else if (number === 2) {
        const answer = document.getElementById('two');
        answer.classList.toggle("visible");
    } else if (number === 3) {
        const answer = document.getElementById('three');
        answer.classList.toggle("visible");
    } else if (number === 4) {
        const answer = document.getElementById('four');
        answer.classList.toggle("visible");
    }
}
