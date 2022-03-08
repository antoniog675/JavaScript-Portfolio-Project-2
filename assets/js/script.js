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


let question_count = 0;
let que_number = 1;

const next_button = document.querySelector(".next-button");

//If next button clicked
next_button.onclick = ()=>{
    if(question_count < questions.length - 1){
    question_count++;
    que_number++;
    showQuestion(question_count);
    questionsCounter(que_number);
    } else {
        console.log("Questions complete")
    }
}
//getting questions

function showQuestion(index) {
    const que_text = document.querySelector("#game-question-flag");
    const option_list = document.querySelector(".game-answers");
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
    let userAns = answer.textContent;
    let correctAns = questions[question_count].correctAnswer;
    if(userAns == correctAns) {
        answer.classList.add("correct");
        console.log("answer is correct")
    } else {
        answer.classList.add("incorrect")
        console.log("answer is wrong")
    }

    //Once user answer is returned, options will be disabled
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
    },]

    document.addEventListener("DOMContentLoaded", showQuestion(0), questionsCounter(1));
// This will load the first question, will listen for the id "play-game" to be clicked, then first question will be loaded.

var brazil = new Image(300,200); 
brazil.src = "../assets/images/brazil-image.jpeg"

var argentina = new Image(300,200); 
argentina.src = "../assets/images/argentina-flag.jpeg"

var ecuador = new Image(300,200); 
ecuador.src = "../assets/images/ecuador.flag.jpeg"

var bolivia = new Image(300,200); 
bolivia.src = "../assets/images/Flag-Bolivia.jpeg"

var chile = new Image(300,200); 
chile.src = "../assets/images/Flag-Chile.jpeg"

var colombia = new Image(300,200); 
colombia.src = "../assets/images/Flag-Colombia.jpg"

var peru = new Image(300,200); 
peru.src = "../assets/images/Flag-Peru.jpeg"

var guayana = new Image(300,200); 
guayana.src = "../assets/images/guayana-flag.jpeg"

var paraguay = new Image(300,200); 
paraguay.src = "../assets/images/paraguay.jpeg"

var suriname = new Image(300,200); 
suriname.src = "../assets/images/suriname-flag.jpeg"

var uruguay = new Image(300,200); 
uruguay.src = "../assets/images/uruguay-flag.jpeg"

var venezuela = new Image(300,200); 
venezuela.src = "../assets/images/venezuela-flag.jpeg"

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