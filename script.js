  const questionTitles = document.querySelectorAll('.question-title');

  questionTitles.forEach(questionTitle => {
    questionTitle.addEventListener('click', () => {

      const index = Array.from(questionTitles).indexOf(questionTitle);

      const answer = document.getElementById(`answer${index + 1}`);
      const icons = questionTitle.querySelectorAll('img');

      if (answer.classList.contains('invisible')) {
        answer.classList.remove('invisible');
        answer.classList.add('visible');

      } else {
        answer.classList.remove('visible');
        answer.classList.add('invisible');
      }
      icons.forEach(icon => icon.classList.toggle('visible'));
      icons.forEach(icon => icon.classList.toggle('invisible'));          
    });
  });

