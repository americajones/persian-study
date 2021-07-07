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
let wordsArray = [];
let meaningsArray = [];
let englishArray = [];
let allAlfbaArray = [];
let randoNumber = 69;
let trueAnswer = "";
let selectedAnswer = "";

pageHeader.addEventListener('click', function () {
    location.reload()
});
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
function loadAlphaFlash() {
    pageHeader.textContent = "";
    pageHeader.textContent = "Flashcards";
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    for (var [letter, value] of Object.entries(alphabet)) {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h1');
        let nuTxt = document.createElement('p');
        let nuDiv2 = document.createElement('div');
        let nuTxtI = document.createElement('p');
        let nuTxtM = document.createElement('p');
        let nuTxtE = document.createElement('p');
        nuDivTit.textContent = value.letter;
        nuTxt.textContent = value.name;
        nuTxtI.textContent = value.initial;
        nuTxtM.textContent = value.middle;
        nuTxtE.textContent = value.final;
        nuDivTit.classList.add('cursive');
        nuTxt.classList.add('small');
        nuTxt.classList.add('semifaded');
        nuDiv.classList.add('alphaFlashcards');
        nuDiv2.classList.add('row')
        nuDiv2.append(nuTxtE);
        nuDiv2.append(nuTxtM);
        nuDiv2.append(nuTxtI);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuDiv2);
        nuDiv.append(nuTxt);
        flashBox.append(nuDiv);
    };
};
function loadWordsFlash() {
    pageHeader.textContent = "";
    pageHeader.textContent = "Flashcards";
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    for (var [word, value] of Object.entries(words)) {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h1');
        let nuTxt = document.createElement('p');
        let nuTxtI = document.createElement('p');
        nuDivTit.textContent = word;
        nuTxt.textContent = value.english;
        nuTxtI.textContent = value.meaning;
        nuTxtI.classList.add('small');
        nuTxt.classList.add('small');
        nuTxt.classList.add('semifaded');
        nuTxt.classList.add('nopacity');
        nuDiv.classList.add('wordFlashcards');
        nuDiv.addEventListener('click', toggleOpac);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxtI);
        flashBox.append(nuDiv);
        function toggleOpac() {
            nuTxt.classList.toggle('nopacity');
        }
    };
};
function loadAlphaQuiz1() {
    loadAlphabet();
    removeAllChildren(flashBox);
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadWordsQuiz2);
    swapButt.removeEventListener('click', loadWordsQuiz1);
    swapButt.removeEventListener('click', loadAlphaQuiz1);
    swapButt.addEventListener('click', loadAlphaQuiz2);
    skipButt.removeEventListener('click', loadAlphaQuiz2);
    skipButt.removeEventListener('click', loadWordsQuiz2);
    skipButt.removeEventListener('click', loadWordsQuiz1);
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
    removeAllChildren(flashBox);
    removeAllChildren(answersBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadWordsQuiz1);
    swapButt.removeEventListener('click', loadWordsQuiz2);
    swapButt.removeEventListener('click', loadAlphaQuiz2);
    swapButt.addEventListener('click', loadAlphaQuiz1);
    skipButt.removeEventListener('click', loadWordsQuiz1);
    skipButt.removeEventListener('click', loadWordsQuiz2);
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
function loadWords() {
    alfbaArray = [];
    alphaArray = [];
    meaningsArray = [];
    wordsArray = [];
    englishArray = [];
    allAlfbaArray = [];
    answersBox.classList.remove('hidden');
    pageHeader.textContent = "";
    pageHeader.textContent = "فارسی";
    quizStudyBox.classList.remove('hidden');
    for (var [word, value] of Object.entries(words)) {
        wordsArray.push(word);
        englishArray.push(value.english);
        meaningsArray.push(value.meaning);
    };
}

function loadWordsQuiz1() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadAlphaQuiz1);
    swapButt.removeEventListener('click', loadAlphaQuiz2);
    swapButt.removeEventListener('click', loadWordsQuiz1);
    swapButt.addEventListener('click', loadWordsQuiz2);
    skipButt.removeEventListener('click', loadAlphaQuiz2);
    skipButt.removeEventListener('click', loadAlphaQuiz1);
    skipButt.removeEventListener('click', loadWordsQuiz2);
    skipButt.addEventListener('click', loadWordsQuiz1);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = wordsArray[randoNumber];
    mainCharText.classList.add('cursive')
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = englishArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * wordsArray.length);
        let randoAnswer = englishArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick2)
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function handleAnswerClick2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsQuiz1();
            secretMessage.textContent = '';
        }, 1000);
    } else {
        secretMessage.textContent = 'try again.';
        setTimeout(() => {
            secretMessage.textContent = '';
        }, 1000);
    }
};
function loadWordsQuiz2() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    skipButt.classList.remove('hidden');
    swapButt.classList.remove('hidden');
    swapButt.removeEventListener('click', loadAlphaQuiz1);
    swapButt.removeEventListener('click', loadAlphaQuiz2);
    swapButt.removeEventListener('click', loadWordsQuiz2);
    swapButt.addEventListener('click', loadWordsQuiz1);
    skipButt.removeEventListener('click', loadAlphaQuiz1);
    skipButt.removeEventListener('click', loadAlphaQuiz2);
    skipButt.removeEventListener('click', loadWordsQuiz1);
    skipButt.addEventListener('click', loadWordsQuiz2);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = englishArray[randoNumber];
    mainCharText.classList.add('cursive')
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = wordsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * wordsArray.length);
        let randoAnswer = wordsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleAnswerClick3)
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        answersBox.append(newDiv);
    });
};
function handleAnswerClick3() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        console.log('. * nice! * .');
        setTimeout(() => {
            loadWordsQuiz2();
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