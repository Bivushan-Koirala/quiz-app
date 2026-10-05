let result = document.getElementById(`myResult`);
const questions = [
  {
    text: "What keyword is used to declare a block-scoped variable that can change?",
    options: ["var", "let", "const", "int"],
    answer: 1,
  },
  {
    text: "Which operator is used to check both value and type (strict equality)?",
    options: ["==", "=", "===", "!="],
    answer: 2,
  },
  {
    text: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World')", "alert('Hello World')", "prompt('Hello World')", "console.log('Hello World')"],
    answer: 1,
  },
  {
    text: "Which method adds a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    text: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "New and Null", "Number Area Network", "None are Null"],
    answer: 0,
  },
  {
    text: "How do you properly declare a function in JavaScript?",
    options: ["function = myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"],
    answer: 1,
  },
  {
    text: "Which characters are used for a single-line comment?",
    options: ["//", "/*", "<!--", "--"],
    answer: 0,
  },
  {
    text: "What will 'typeof null' return in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: 1,
  },
  {
    text: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "slice()", "splice()"],
    answer: 0,
  },
  {
    text: "How do you find the number with the highest value of x and y?",
    options: ["Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)", "Math.highest(x, y)"],
    answer: 1,
  },
];
const optionBtn = [
  document.getElementById(`Pokhara`),
  document.getElementById(`Jhapa`),
  document.getElementById(`Kathmandu`),
  document.getElementById(`Birgunj`),
];

let currentQuestion = 0;
let question = questions[currentQuestion];
let mySubmit = document.getElementById(`mySubmit`);
let scoreDisplay = document.getElementById(`score`);
let next = document.getElementById(`next`);
let selectedAnswer;
let score = 0;
let checkSubmission = false;


const questionH2 = document.getElementById(`question`);

function loadQuestion() {
  questionH2.textContent = question.text;
  let i = 0;
  for (let btn of optionBtn) {
    btn.textContent = question.options[i];
    let index = i;
    btn.onclick = function () {
      selectedAnswer = index;
    };
    i++;
  }
}
 next.style.display = "none";
loadQuestion();
mySubmit.onclick = function () {
  if (checkSubmission === false) {
    if (selectedAnswer === question.answer) {
      result.textContent = "Correct";
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      result.textContent = "Incorrect";
    }
    checkSubmission = true;
    next.style.display = "inline-block";
  }
};
   next.onclick = function(){
     checkSubmission = false;
     currentQuestion++;
     
     if(currentQuestion >= questions.length) {
       result.textContent = `Quiz Over! Final Score: ${score}/${questions.length}`;
       next.style.display = "none";
       mySubmit.style.display = "none";
       return;
     }
     
     question = questions[currentQuestion];
     loadQuestion();
     result.textContent = "";
   }
