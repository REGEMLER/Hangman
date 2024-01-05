window.addEventListener("keyup", (e) => {
    console.log(e);
})

import {questions} from './questions.js';

console.log(questions.length)

function f() {
    const inputs = [...document.querySelectorAll(".input")];
    const word = Object.keys(questions[1])[0].split("");
    console.log(word);
    inputs.forEach((item, index) => item.textContent = word[index])
}