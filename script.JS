// ========== Interactive Quiz ==========
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which language is used for web development?",
    options: ["C", "Java", "JavaScript", "Swift"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuiz() {
  const quiz = quizData[currentQuestion];
  questionEl.textContent = quiz.question;
  optionsEl.innerHTML = "";

  quiz.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
    nextBtn.style.display = "none";
  } else {
    resultEl.textContent = `You scored ${score} / ${quizData.length}`;
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

// Initialize Quiz
loadQuiz();
nextBtn.style.display = "none";


// ========== Fetch API Example ==========
document.getElementById("fetchJoke").addEventListener("click", async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
});
