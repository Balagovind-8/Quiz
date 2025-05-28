 let currentQuestionIndex = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionBox.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectOption(li, q.answer);
    optionsList.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function selectOption(selectedLi, correctAnswer) {
  const allOptions = optionsList.querySelectorAll("li");
  allOptions.forEach(li => {
    li.onclick = null;
    if (li.textContent === correctAnswer) {
      li.classList.add("correct");
    } else {
      li.classList.add("wrong");
    }
  });

  if (selectedLi.textContent === correctAnswer) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionBox.style.display = "none";
    optionsList.style.display = "none";
    nextBtn.style.display = "none";
    resultBox.style.display = "block";
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
  }
};

showQuestion();
