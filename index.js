let result = document.getElementById(`myResult`);
const questions = [
  {
    text: "What is the capital of Nepal?",
    options: ["Pokhara", "Jhapa", "Kathmandu", "Birgunj"],
    answer: 2,
  },

  {
    text: "Your second question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 1,
  },

  {
    text: "Your third question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 3,
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
