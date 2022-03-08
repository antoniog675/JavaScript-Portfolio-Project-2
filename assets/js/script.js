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

const myQuestions = [
    {
        question: brazil,
        answer: {
            a: "Brazil",
            b: "Nigeria",
            c: "Peru",
            d: "Lemon"
        },
        correctAnswer: "a"
    },

    {
        question: bolivia,
        answer: {
            a: "Colombia",
            b: "Guayana",
            c: "England",
            d: "Bolivia"
        },
        correctAnswer: "d"
    },

    {
        question: argentina,
        answer: {
            a: "Italy",
            b: "Argentina",
            c: "Peru",
            d: "Uruguay"
        },
        correctAnswer: "b"
    },

    {
        question: ecuador,
        answer: {
            a: "Chile",
            b: "Venezuela",
            c: "Ecuador",
            d: "Colombia"
        },
        correctAnswer: "c"
    },

    {
        question: chile,
        answer: {
            a: "Chile  ",
            b: "Morocco",
            c: "Cuba",
            d: "Puerto Rico"
        },
        correctAnswer: "a"
    },

    {
        question: colombia,
        answer: {
            a: "Ecuador",
            b: "Colombia",
            c: "France",
            d: "Germany"
        },
        correctAnswer: "b"
    },

    {
        question: peru,
        answer: {
            a: "Peru",
            b: "Costa Rica",
            c: "Cuba",
            d: "Chile"
        },
        correctAnswer: "a"
    },

    {
        question: guayana,
        answer: {
            a: "Bolivia",
            b: "Congo",
            c: "Suriname",
            d: "Guayana"
        },
        correctAnswer: "d"
    },

    {
        question: paraguay,
        answer: {
            a: "Argentina",
            b: "Mexico",
            c: "Paraguay",
            d: "Australia"
        },
        correctAnswer: "c"
    },

    {
        question: suriname,
        answer: {
            a: "Belgium",
            b: "Suriname",
            c: "Norway",
            d: "Iceland"
        },
        correctAnswer: "b"
    },

    {
        question: uruguay,
        answer: {
            a: "Uruguay",
            b: "Paraguay",
            c: "Peru",
            d: "Brazil"
        },
        correctAnswer: "a"
    },

    {
        question: venezuela,
        answer: {
            a: "Guayana",
            b: "Ecuador",
            c: "Colombia",
            d: "Venezuela"
        },
        correctAnswer: "d"
    },
]
// End of questions

//Will load random number between index 0 and index 12, so between the 12 questions

document.addEventListener("DOMContentLoaded", getQuestion);

function getQuestion() {
    let randomQuestion = Math.floor(Math.random() * myQuestions.length);
    question = myQuestions[randomQuestion]
    
    flag = question.question
    answer1 = question.answer.a
    answer2 = question.answer.b
    answer3 = question.answer.c
    answer4 = question.answer.d

    document.getElementById("answer1").innerHTML = answer1;
    document.getElementById("answer2").innerHTML = answer2;
    document.getElementById("answer3").innerHTML = answer3;
    document.getElementById("answer4").innerHTML = answer4;
    removeAllChildNodes(document.getElementById("game-question-flag"))
    document.getElementById("game-question-flag").appendChild(flag)
    
    let next = document.getElementById("next-button")
    next.addEventListener("click", getQuestion)
    
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Need to append the value from the returned object, to the questions for user....

//Next button working


// let currentScore = 0;

// function userAnswer() {
    
// }

// if(userAnswer === currentQuestion.correctAnswer){
//     numCorrect++;
//     answerContainers[questionNumber].style.color = 'lightgreen';
//   }
//   else{
//     answerContainers[questionNumber].style.color = 'red';
//   };

//When answer is answered, show next button, add event listener to get next question ready


//Create loop for to check when all questions are answered, will go to highscore page, collect number of answers answered correctly and display it at the end.