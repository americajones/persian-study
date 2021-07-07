const quizStudyBox = document.querySelector('#quiz-practice');
const mainCharText = document.querySelector('#main-char');
const mainBox = document.querySelector('#main-box');
const secondaryCharText = document.querySelector('#optional-char');
const answersBox = document.querySelector('.answers');
const skipButt = document.querySelector('.skip');
const swapButt = document.querySelector('.swap');
const flashBox = document.querySelector('.flashBox');
let pageHeader = document.querySelector('.title');
const secretMessage = document.querySelector('.secret-message');
let numbersArray = [];
let alphaArray = [];
let alfbaArray = [];
let allAlfbaArray = [];
let randoNumber = 69;
let trueAnswer = "";
let selectedAnswer = "";

function loadAlphabet() {
    alfbaArray = [];
    alphaArray = [];
    allAlfbaArray = [];
    answersBox.classList.remove('hidden');
    pageHeader.textContent = "";
    pageHeader.textContent = "الفبای فارسی";
    quizStudyBox.classList.remove('hidden');
    for (var [char, value] of Object.entries(alphabet)) {
        numbersArray.push(char);
        alfbaArray.push(value.letter);
        alphaArray.push(value.name);
        allAlfbaArray.push(value.initial);
        allAlfbaArray.push(value.middle);
        allAlfbaArray.push(value.final);
    };
}

function loadAlphaQuiz1() {
    loadAlphabet();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadAlphaQuiz1);
    swapButt.addEventListener('click', loadAlphaQuiz2);
    skipButt.removeEventListener('click', loadAlphaQuiz2);
    skipButt.addEventListener('click', loadAlphaQuiz1);
    randoNumber = Math.floor(Math.random() * alfbaArray.length);
    mainCharText.textContent = alfbaArray[randoNumber];
    mainCharText.classList.add('cursive')
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = alphaArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * alfbaArray.length);
        let randoAnswer = alphaArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function handleAnswerClick() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadAlphaQuiz1();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function loadAlphaQuiz2() {
    loadAlphabet();
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadAlphaQuiz2);
    swapButt.addEventListener('click', loadAlphaQuiz1);
    skipButt.removeEventListener('click', loadAlphaQuiz1);
    skipButt.addEventListener('click', loadAlphaQuiz2);
    randoNumber = Math.floor(Math.random() * alfbaArray.length);
    mainCharText.textContent = alphaArray[randoNumber];
    mainCharText.classList.add('cursive')
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = alfbaArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * alfbaArray.length);
        let randoAnswer = alfbaArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick1)
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function handleAnswerClick1() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadAlphaQuiz2();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//menu shit
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const finals = document.querySelectorAll(".final");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "Menu ▼";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "✖";
    };
};
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    };
};
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    };
};
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    };
    item.addEventListener("keypress", toggleItem, false);
};
for (let item of finals) {
    item.addEventListener('click', toggleMenu, false);
};
document.addEventListener("click", closeSubmenu, false);