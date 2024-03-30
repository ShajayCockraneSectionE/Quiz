//To create the quiz questions and answers
const questions = [
    {
        question: "How many US states are there?",
        answers: [
            { text: "45", correct: false},
            { text: "55", correct: false},
            { text: "50", correct: true},
            { text: "52", correct: false},
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "The River Nile", correct: true},
            { text: "Amazon River", correct: false},
            { text: "Mississippi River", correct: false},
            { text: "Ob River", correct: false},
        ]
},
{
    question: "Where is the Eiffel Tower located?",
        answers: [
            { text: "London,England", correct: false},
            { text: "Paris,France", correct: true},
            { text: "Berlin,Germany", correct: false},
            { text: "Athens, Greece", correct: false},
        ]
},
{
    question: "Which current active volcano is the eldest?",
        answers: [
            { text: "Mount Vesuvius", correct: false},
            { text: "Kilauea", correct: false},
            { text: "Mauna Loa", correct: false},
            { text: "Mount Etna", correct: true},
        ]
},
{
    question: "Which country has the longest coastline?",
        answers: [
            { text: "Cuba", correct: false},
            { text: "Mexico", correct: false},
            { text: "Canada", correct: true},
            { text: "New Zealand", correct: false},
        ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");

//To Calculate score
let currentQuestion = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//To show the questions and answers
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// To show if answer is correct or incorrect
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
score++;
    }else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}
// To show the score at the end of the quiz and gove the user a choice to play again
function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
//Created so when the user clicks next it brings up another question
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
}else{
    startQuiz();
}
});

startQuiz();


$(document).ready(function() {
var totalQuestions = 5; // Set total number of questions
var currentQuestion = 1;

// Function to update the text of the counter
function updateCounter() {
    $('.current-question').text(currentQuestion);
    $('.total-questions').text(totalQuestions);
}

//To increase the question counter
function nextButton(){
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateCounter();
}
}
//To decrease the question counter
function previousButton() {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateCounter();
    }
}
// Event listeners for navigation buttons
$('#next-btn').on('click', nextButton);
$('#previous-btn').on('click', previousButton);

// Initial update of the counter
updateCounter();
});
