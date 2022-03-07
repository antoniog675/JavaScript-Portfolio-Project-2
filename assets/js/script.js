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

var brazil = new Image(100,200); 
brazil.src = "../assets/images/brazil-image.jpeg"

var argentina = new Image(100,200); 
argentina.src = "../assets/images/argentina-flag.jpeg"

var ecuador = new Image(100,200); 
ecuador.src = "../assets/images/ecuador.flag"

var bolivia = new Image(100,200); 
bolivia.src = "../assets/images/Flag-Bolivia.jpeg"

var chile = new Image(100,200); 
chile.src = "../assets/images/Flag-Chile.jpeg"

var colombia = new Image(100,200); 
colombia.src = "../assets/images/Flag-Colombia.jpg"

var peru = new Image(100,200); 
peru.src = "../assets/images/Flag-Peru.jpeg"

var guayana = new Image(100,200); 
guayana.src = "../assets/images/guayana-flag.jpeg"

var paraguay = new Image(100,200); 
paraguay.src = "../assets/images/paraguay.jpeg"

var suriname = new Image(100,200); 
suriname.src = "../assets/images/suriname-flag.jpeg"

var uruguay = new Image(100,200); 
uruguay.src = "../assets/images/uruguay-flag.jpeg"

var venezuela = new Image(100,200); 
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
        question: "Bolivia",
        answer: {
            a: "Colombia",
            b: "Guayana",
            c: "England",
            d: "Bolivia"
        },
        correctAnswer: "d"
    },

    {
        question: "Argentina",
        answer: {
            a: "Italy",
            b: "Argentina",
            c: "Peru",
            d: "Uruguay"
        },
        correctAnswer: "b"
    },

    {
        question: "Ecuador",
        answer: {
            a: "Chile",
            b: "Venezuela",
            c: "Ecuador",
            d: "Colombia"
        },
        correctAnswer: "c"
    },

    {
        question: "Chile",
        answer: {
            a: "Chile  ",
            b: "Morocco",
            c: "Cuba",
            d: "Puerto Rico"
        },
        correctAnswer: "a"
    },

    {
        question: "Colombia",
        answer: {
            a: "Ecuador",
            b: "Colombia",
            c: "France",
            d: "Germany"
        },
        correctAnswer: "b"
    },

    {
        question: "Peru",
        answer: {
            a: "Peru",
            b: "Costa Rica",
            c: "Cuba",
            d: "Chile"
        },
        correctAnswer: "a"
    },

    {
        question: "Guayana",
        answer: {
            a: "Bolivia",
            b: "Congo",
            c: "Suriname",
            d: "Guayana"
        },
        correctAnswer: "d"
    },

    {
        question: "Paraguay",
        answer: {
            a: "Argentina",
            b: "Mexico",
            c: "Paraguay",
            d: "Australia"
        },
        correctAnswer: "c"
    },

    {
        question: "Suriname",
        answer: {
            a: "Belgium",
            b: "Suriname",
            c: "Norway",
            d: "Iceland"
        },
        correctAnswer: "b"
    },

    {
        question: "Uruguay",
        answer: {
            a: "Uruguay",
            b: "Paraguay",
            c: "Peru",
            d: "Brazil"
        },
        correctAnswer: "a"
    },

    {
        question: "Venezuela",
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

function getQuestion() {
    const random = Math.floor(Math.random() * myQuestions.length);
    question = myQuestions[random]
    flag = question.question
    answer1 = question.answer.a
    answer2 = question.answer.b
    answer3 = question.answer.c
    answer4 = question.answer.d
    document.getElementById("answer1").innerHTML = answer1
    document.getElementById("answer2").innerHTML = answer2
    document.getElementById("answer3").innerHTML = answer3
    document.getElementById("answer4").innerHTML = answer4
    document.getElementById("game-question-flag").appendChild(flag)
}
// Need to append the value from the returned object, to the questions for user....

