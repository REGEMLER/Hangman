import {questions} from './questions.js';

let i = 0;
let arrQuestions = [];
let usedLetters = [];
let question = ``;
let answer = '';
let counter = 0;

function createGame() {
    arrQuestions = questions.sort(() => Math.random() - 0.5);
    const firstAnswer = Object.keys(arrQuestions[0])[0];
    const previousfirstAnswer = localStorage.getItem("firstAnswer");
    if(firstAnswer === previousfirstAnswer) {
        createGame()
    } else {
        i = 0;
        createQuestion();
        localStorage.setItem("firstAnswer", firstAnswer);
    }
    console.log(firstAnswer)
}

function createQuestion() {
    answer = Object.keys(arrQuestions[i])[0].toLowerCase();
    question = Object.values(arrQuestions[i])[0].toLowerCase();
    const questionElement = document.querySelector(".question");
    questionElement.textContent = question; 
    counter = 0; 
    const span = document.getElementById("span");
    span.textContent = `${counter}/6`; 
    usedLetters.length = 0;
    createInputs();
}

function createInputs() {
    const inputs = document.querySelector(".inputs");
    for(let i = 0; i < answer.length; i++) {
        const element = document.createElement("DIV");
        element.classList.add("input");
        inputs.append(element);
    }
}

function createModal(isWin) {

    function playAgain() {
        const modal = document.querySelector("modal");
        modal.remove();
    }

    const modal = document.createElement("div");
    const title = isWin ? "Congratulations you are winner!" : "Unfortunately you are hanged! A Feast for Crows!";
    const secret = `The sicret word is ${answer.toUpperCase()}`;
    const color = isWin ? "modal__title_win" : "modal__title_loose";
    modal.classList.add("modal");
    modal.innerHTML = `<div class="modal__inner ${color}">
    <h2 class="modal__title">${title}</h2>
    <h3 class="modal__word">${secret}</h3>
    <button class="modal__btn" onclick="playAgain()">Play again</button>
    </div>`;
    document.body.append(modal);
}



function createBody() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const image = document.createElement("div");
    image.classList.add("image");
    image.innerHTML = `<div class="gallows"><img src="assets/gallows.svg" alt="gallows"></div>
    <div class="hangman">
        <div class="hangman__item hangman__item1 hidden"><img src="assets/head.svg" alt="head"></div>
        <div class="hands">
            <div class="hangman__item hangman__item2 hidden"><img src="assets/hand-one.svg" alt="hand"></div>
            <div class="hangman__item hangman__item3 hidden"><img src="assets/body.svg" alt="bady"></div>
            <div class="hangman__item hangman__item4 hidden"><img src="assets/hand-two.svg" alt="hand"></div>
        </div>
        <div class="legs">
            <div class="hangman__item hangman__item5 hidden"><img src="assets/leg-one.svg" alt="leg"></div>
            <div class="hangman__item hangman__item6 hidden"><img src="assets/leg-two.svg" alt="leg"></div>
        </div>
    </div>`
    wrapper.append(image);


    const field = document.createElement("div");
    field.classList.add("field");
    field.innerHTML = `<h1>HANGMAN GAME</h1>
    <div class="inputs">
    </div>
    <h2 class="question">${question}</h2>
    <h2 class="title">Incorrect guesses: <span id="span">0/6</span></h2>
    <div class="keyboard">
        <div class="keyboard__row">
            <div class="key">A</div>
            <div class="key">B</div>
            <div class="key">C</div>
            <div class="key">D</div>
            <div class="key">E</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">I</div>
        </div>
        <div class="keyboard__row">
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
            <div class="key">M</div>
            <div class="key">N</div>
            <div class="key">O</div>
            <div class="key">P</div>
            <div class="key">Q</div>
            <div class="key">R</div>
        </div>
        <div class="keyboard__row">
            <div class="key">S</div>
            <div class="key">T</div>
            <div class="key">U</div>
            <div class="key">V</div>
            <div class="key">W</div>
            <div class="key">X</div>
            <div class="key">Y</div>
            <div class="key">Z</div>
        </div>
    </div>`
    wrapper.append(field);
    document.body.prepend(wrapper);
    createGame();
}

createBody();

function f() {
    const inputs = [...document.querySelectorAll(".input")];
    const word = Object.keys(questions[1])[0].split("");
    console.log(word);
    inputs.forEach((item, index) => item.textContent = word[index])
}

window.addEventListener("keyup", (e) => {
    console.log(e);
})