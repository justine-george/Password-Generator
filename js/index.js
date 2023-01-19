/* Author: Justine George */
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let genBtnEl = document.getElementById("generate-btn");

let pElFirst = document.getElementById("ptext-1");
let pElSecond = document.getElementById("ptext-2");

let snackText = document.getElementById("snacktext");

document.querySelectorAll(".password-field").forEach((e) => {
    e.addEventListener('click', () => {
        navigator.clipboard.writeText(e.textContent);
        snackText.style.opacity = 1;
        setTimeout(() => {
            snackText.style.opacity = 0;
        }, 1000);

        console.log('copied to clipboard!');
    });
});

let themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if (bodyClass === "dark-theme") {
        document.body.className = "light-theme";
    } else {
        document.body.className = "dark-theme";
    }
});

genBtnEl.addEventListener('click', () => {
    pElFirst.textContent = getNLengthPassword(15);
    pElFirst.style.opacity = 1;
    pElSecond.textContent = getNLengthPassword(15);
    pElSecond.style.opacity = 1;
    console.log();
});

function getNLengthPassword(N) {
    let pWord = "";
    for (let i = 0; i < N; i++) {
        pWord += getRandomCharacter();
    }
    return pWord;
}

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

