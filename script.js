//DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "When was the first World War (WWI) fought?",
    answers: [
      { text: "1956-1960", isCorrect: false },
      { text: "1945-1949", isCorrect: false },
      { text: "1941-1945", isCorrect: true },
      { text: "1953-1957", isCorrect: false },
    ],
  },
  {
    question:
      "What is the most beginner-friendly programming language out of the following?",
    answers: [
      { text: "C++", isCorrect: false },
      { text: "JavaScript", isCorrect: false },
      { text: "Rust", isCorrect: false },
      { text: "Python", isCorrect: true },
    ],
  },
  {
    question:
      "Which one of the following programming languages is considered a styling language for web development?",
    answers: [
      { text: "CSS", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "HTML", isCorrect: false },
      { text: "Java", isCorrect: false },
    ],
  },
  {
    question: "Which symbol is used for a bitwise AND operation?",
    answers: [
      { text: "&&", isCorrect: false },
      { text: "&", isCorrect: true },
      { text: "|", isCorrect: false },
      { text: "^", isCorrect: false },
    ],
  },
  {
    question: "Which operator represents logical AND?",
    answers: [
      { text: "&&", isCorrect: true },
      { text: "&", isCorrect: false },
      { text: "|", isCorrect: false },
      { text: "^", isCorrect: false },
    ],
  },
];

//QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  //reset variables
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  //reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.isCorrect = answer.isCorrect;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisbled = true;

  const selectedButton = event.target;
  const correct = selectedButton.dataset.isCorrect === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.isCorrect === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (correct) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genuis!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great Job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good Effort! Keep Learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not Bad! Try again to Improve!";
  } else {
    resultMessage.textContent = "Keep Studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
