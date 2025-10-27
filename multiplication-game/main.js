const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

// Get the saved score or start from 0
let score = localStorage.getItem("score");
if (!score && score !== 0) {
  score = 0;
}

// Display the first question and score
questionEl.textContent = `What is ${num1} multiply by ${num2}?`;
scoreEl.textContent = `Score: ${score}`;

// Declare correctAns as a variable (not const)
let correctAns = num1 * num2;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAns = Number(inputEl.value);

  if (!isNaN(userAns)) {
    if (userAns === correctAns) {
      score++;
    } else {
      score--;
    }

    updateLocalStorage();
    scoreEl.textContent = `Score: ${score}`;
    inputEl.value = "";

    // Generate a new question dynamically
    generateNewQuestion();
  }
});

function generateNewQuestion() {
  const newNum1 = Math.ceil(Math.random() * 10);
  const newNum2 = Math.ceil(Math.random() * 10);
  correctAns = newNum1 * newNum2;
  questionEl.textContent = `What is ${newNum1} multiply by ${newNum2}?`;
}

function updateLocalStorage() {
  localStorage.setItem("score", score);
}
