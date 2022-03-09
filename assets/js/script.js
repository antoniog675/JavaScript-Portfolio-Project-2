// For pop up message of the rules
let message = 0;
function pop() {
    if(message == 0) {
        document.getElementById("rules-message-box").style.display = "block";
        message = 1;
    }
    else {
        document.getElementById("rules-message-box").style.display = "none";
        message = 0;
    }
}

// Main JS
const exit_button = document.querySelector(".end-game-buttons .quit")
const restart_button = document.querySelector(".end-game-buttons .restart")
const quiz_box = document.querySelector(".cointainer2")
const timeCount = document.querySelector(".timer-sec")

const option_list = document.querySelector(".game-answers");
let question_count = 0;
let que_number = 1;
let counter;
let timeValue = 15;
let userScore = 0;
let userName = document.querySelector(".playerName")

const next_button = document.querySelector(".next-button");
const result_box = document.querySelector(".result-box")
const inGameRestart = document.querySelector(".home-next-restart .restart-button")
const restart_quiz = document.querySelector(".end-game-buttons .restart")
const quit_game = document.querySelector(".end-game-buttons .quit")

inGameRestart.onclick = () =>{
    window.location.reload();
}

restart_quiz.onclick = () =>{
    window.location.reload();
}

quit_game.onclick = () =>{
    window.location = 'index.html'
}

//If next button clicked
next_button.onclick = ()=>{
    if(question_count < questions.length - 1){
        question_count++;
        que_number++;
        showQuestion(question_count);
        questionsCounter(que_number);
        clearInterval(counter);
        startTimer(timeValue);
        next_button.style.display = "none";
    } else {
        console.log("Questions complete");
        showResultBox();
    }
}
//getting questions

function showQuestion(index) {
    const que_text = document.querySelector("#game-question-flag");
    // const option_list = document.querySelector(".game-answers");
    let que_tag = '<span>'+ questions[index].num + '. '+ questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].answer[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].answer[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].answer[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].answer[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[question_count].correctAnswer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns) {
        userScore += 1;
        console.log(userScore)
        answer.classList.add("correct");
        console.log("answer is correct")
    } else {
        answer.classList.add("incorrect")
        console.log("answer is wrong")

        // If the answer is incorrect then it will automatically show the correct answer
        for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct")
        }
    }

    }
    
    //Once user answer is returned, options will be disabled
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
    }
    next_button.style.display = "block";
}

function showResultBox() {
    result_box.classList.add("activeResult");
    const scoreText = document.querySelector(".score-text");
    let scoreTag = '<span>You scored<p>'+ userScore +'</p>out of<p>'+ questions.length+'</p></span>';
    scoreText.innerHTML = scoreTag;
    }   

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time < 0) {
            clearInterval(counter);
            timeCount.textContent = "0"

            let correctAns = questions[question_count].correctAnswer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct")
                }
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled")
            }
            next_button.style.display = "block";
        }
    } 
}

function questionsCounter(index) {
    const question_counter = document.querySelector(".total-que");
    let totalQuestionCount = '<span><p>'+ index +'</p>Of<p>'+ questions.length +'</p>Questions</span>';
    question_counter.innerHTML = totalQuestionCount;
}

const questions = [
    {
        num: 1,
        question: "Where is Rio de janiero located",
        answer: [
            "Brazil",
            "Nigeria",
            "Peru",
            "Lemon"
            ],
        correctAnswer: "Brazil"
    },

    {
        num: 2,
        question: "Which Country is Antonio from?",
        answer: [
            "Colombia",
            "Guayana",
            "England",
            "Bolivia"
            ],
        correctAnswer: "Bolivia"
    },

    {
        num: 3,
        question: "Which national football team did Lionel Messi play for?",
        answer: [
            "Italy",
            "Argentina",
            "Peru",
            "Uruguay"
        ],
        correctAnswer: "Argentina"
    },
    {
        num: 4,
        question: "You could say this country is along the equator.......",
        answer: [
            "Chile",
            "Venezuela",
            "Ecuador",
            "Colombia",
        ],
        correctAnswer: "Ecuador"
    },

    {
        num: 5,
        question: "This country sounds like a vegetable...",
        answer: [
            "Chile",
            "Morocco",
            "Cuba",
            "Puerto Rico"
        ],
        correctAnswer: "Chile"
    },
    {
        num: 6,
        question: "The capital city of this country is Bogata",
        answer: [
            "Ecuador",
            "Colombia",
            "France",
            "Germany"
        ],
        correctAnswer: "Colombia"
    },

    {
        num: 7,
        question: "This country is home to Machu Picchu ",
        answer: [
            "Peru",
            "Costa Rica",
            "Cuba",
            "Chile"
        ],
        correctAnswer: "Peru"
    },

    {
        num: 8,
        question: "This country sits between Venezuela and Suriname..",
        answer: [
            "Bolivia",
            "Congo",
            "Suriname",
            "Guayana"
        ],
        correctAnswer: "Guayana"
    },

    {
        num: 9,
        question: "This country is a landlocked country between Argentina, Brazil and Bolivia",
        answer: [
            "Argentina",
            "Mexico",
            "Paraguay",
            "Australia"
        ],
        correctAnswer: "Paraguay"
    },

    {
        num: 10,
        question: "This country was once know as Dutch Guiana and sits next to Guayana",
        answer: [
            "Belgium",
            "Suriname",
            "Norway",
            "Iceland"
        ],
        correctAnswer: "Suriname"
    },

    {
        num: 11,
        question: "Football superstar Edison Cavani is from this country",
        answer: [
            "Uruguay",
            "Paraguay",
            "Peru",
            "Brazil"
        ],
        correctAnswer: "Uruguay"
    },

    {
        num: 12,
        question: "The capital city of this country Caracas",
        answer: [
            "Guayana",
            "Ecuador",
            "Colombia",
            "Venezuela"
        ],
        correctAnswer: "Venezuela"
    },
]

    document.addEventListener("DOMContentLoaded", showQuestion(0), questionsCounter(1), startTimer(15));
// This will load the first question, will listen for the id "play-game" to be clicked, then first question will be loaded.

// const myQuestions = [
//     {
//         question: brazil,
//         answer: {
//             a: "Brazil",
//             b: "Nigeria",
//             c: "Peru",
//             d: "Lemon"
//         },
//         correctAnswer: "Brazil"
//     },

//     {
//         question: bolivia,
//         answer: {
//             a: "Colombia",
//             b: "Guayana",
//             c: "England",
//             d: "Bolivia"
//         },
//         correctAnswer: "Bolivia"
//     },

//     {
//         question: argentina,
//         answer: {
//             a: "Italy",
//             b: "Argentina",
//             c: "Peru",
//             d: "Uruguay"
//         },
//         correctAnswer: "Argentina"
//     },

//     {
//         question: ecuador,
//         answer: {
//             a: "Chile",
//             b: "Venezuela",
//             c: "Ecuador",
//             d: "Colombia"
//         },
//         correctAnswer: "Ecuador"
//     },

//     {
//         question: chile,
//         answer: {
//             a: "Chile",
//             b: "Morocco",
//             c: "Cuba",
//             d: "Puerto Rico"
//         },
//         correctAnswer: "Chile"
//     },

//     {
//         question: colombia,
//         answer: {
//             a: "Ecuador",
//             b: "Colombia",
//             c: "France",
//             d: "Germany"
//         },
//         correctAnswer: "Colombia"
//     },

//     {
//         question: peru,
//         answer: {
//             a: "Peru",
//             b: "Costa Rica",
//             c: "Cuba",
//             d: "Chile"
//         },
//         correctAnswer: "Peru"
//     },

//     {
//         question: guayana,
//         answer: {
//             a: "Bolivia",
//             b: "Congo",
//             c: "Suriname",
//             d: "Guayana"
//         },
//         correctAnswer: "Guayana"
//     },

//     {
//         question: paraguay,
//         answer: {
//             a: "Argentina",
//             b: "Mexico",
//             c: "Paraguay",
//             d: "Australia"
//         },
//         correctAnswer: "Paraguay"
//     },

//     {
//         question: suriname,
//         answer: {
//             a: "Belgium",
//             b: "Suriname",
//             c: "Norway",
//             d: "Iceland"
//         },
//         correctAnswer: "Suriname"
//     },

//     {
//         question: uruguay,
//         answer: {
//             a: "Uruguay",
//             b: "Paraguay",
//             c: "Peru",
//             d: "Brazil"
//         },
//         correctAnswer: "Uruguay"
//     },

//     {
//         question: venezuela,
//         answer: {
//             a: "Guayana",
//             b: "Ecuador",
//             c: "Colombia",
//             d: "Venezuela"
//         },
//         correctAnswer: "Venezuela"
//     },
// ]
// // End of questions list