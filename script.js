const quizStudyBox = document.querySelector('#quiz-practice');
const mainCharText = document.querySelector('#main-char');
const mainBox = document.querySelector('#main-box');
const secondaryCharText = document.querySelector('#optional-char');
const answersBox = document.querySelector('.answers');
const skipButt = document.querySelector('.skip');
const swapButt = document.querySelector('.swap');
const flashBox = document.querySelector('.flashBox');
let pageHeader = document.querySelector('.title');
const buttBox = document.querySelector('.bottom-buttons');
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
let secretMessage = "";

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
    pageHeader.textContent = "فلش کارت";
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
    pageHeader.textContent = "فلش کارت";
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    for (var [word, value] of Object.entries(words1)) {
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
function loadSentencesFlash() {
    pageHeader.textContent = "";
    pageHeader.textContent = "فلش کارت";
    quizStudyBox.classList.add('hidden');
    removeAllChildren(flashBox);
    for (var [word, value] of Object.entries(sentences1)) {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxtI = document.createElement('p');
        nuDivTit.textContent = word;
        nuTxt.textContent = value.english;
        nuTxtI.textContent = value.meaning;
        nuTxtI.classList.add('small');
        nuTxt.classList.add('small');
        nuTxt.classList.add('semifaded');
        nuTxt.classList.add('nopacity');
        nuDiv.classList.add('sentenceFlashcards');
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
function makeButtons(swapEvent, skipEvent) {
    removeAllChildren(buttBox);
    let secret = document.createElement('p');
    secret.classList.add('secret-message')
    secret.textContent = "";
    let skipButt = document.createElement('button');
    skipButt.textContent = "skip";
    skipButt.classList.add("skip");
    skipButt.classList.add("butt");
    let swapButt = document.createElement('button');
    swapButt.textContent = "swap quiz style";
    swapButt.classList.add("swap");
    swapButt.classList.add("butt");
    skipButt.addEventListener('click', skipEvent);
    swapButt.addEventListener('click', swapEvent);
    buttBox.append(swapButt);
    buttBox.append(secret);
    buttBox.append(skipButt);
    secretMessage = document.querySelector('.secret-message');
}
function loadAlphaQuiz1() {
    loadAlphabet();
    removeAllChildren(flashBox);
    removeAllChildren(answersBox);
    makeButtons(loadAlphaQuiz2, loadAlphaQuiz1);
    randoNumber = Math.floor(Math.random() * alfbaArray.length);
    mainCharText.textContent = alfbaArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadAlphaQuiz1, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function handleAnswerClick(timeoutFunction, event) {
    selectedAnswer = event.target.textContent;
    if (selectedAnswer === trueAnswer) {
        secretMessage.textContent = '. * nice! * .';
        mainCharText.append(" = ", selectedAnswer);
        setTimeout(() => {
            timeoutFunction();
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
    makeButtons(loadAlphaQuiz1, loadAlphaQuiz2);
    randoNumber = Math.floor(Math.random() * alfbaArray.length);
    mainCharText.textContent = alphaArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadAlphaQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
};
function loadAdvancedAlphaQuiz1() {
    loadAlphabet();
    removeAllChildren(flashBox);
    removeAllChildren(answersBox);
    makeButtons(loadAdvancedAlphaQuiz2, loadAdvancedAlphaQuiz1);
    randoNumber = Math.floor(Math.random() * allAlfbaArray.length);
    mainCharText.textContent = allAlfbaArray[randoNumber];
    secondaryCharText.textContent = "";
    let answersArray = [];
    // console.log(Object.values(alphabet[1]).includes("mim"));
    for (let i = 1; i < alfbaArray.length + 1; i++) {
        if (Object.values(alphabet[i]).includes(allAlfbaArray[randoNumber])) {
            trueAnswer = Object.values(alphabet[i])[1];
        }
    }
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadAdvancedAlphaQuiz1, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadAdvancedAlphaQuiz2() {
    loadAlphabet();
    removeAllChildren(flashBox);
    removeAllChildren(answersBox);
    makeButtons(loadAdvancedAlphaQuiz1, loadAdvancedAlphaQuiz2);
    randoNumber = Math.floor(Math.random() * alfbaArray.length);
    mainCharText.textContent = alphaArray[randoNumber];
    secondaryCharText.textContent = "";
    let answersArray = [];
    let answerNum = "";
    // console.log(Object.values(alphabet[1]).includes("mim"));
    for (let i = 1; i < alfbaArray.length + 1; i++) {
        if (Object.values(alphabet[i]).includes(alphaArray[randoNumber])) {
            answerNum = i;
        }
    };
    var smolrandonum = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
    trueAnswer = Object.values(alphabet[answerNum])[smolrandonum];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * allAlfbaArray.length);
        let randoAnswer = allAlfbaArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadAdvancedAlphaQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
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
    pageHeader.textContent = "کلمات فارسی";
    quizStudyBox.classList.remove('hidden');
    for (var [word, value] of Object.entries(words1)) {
        wordsArray.push(word);
        englishArray.push(value.english);
        meaningsArray.push(value.meaning);
    };
}
function loadSentences() {
    alfbaArray = [];
    alphaArray = [];
    meaningsArray = [];
    wordsArray = [];
    englishArray = [];
    allAlfbaArray = [];
    answersBox.classList.remove('hidden');
    pageHeader.textContent = "";
    pageHeader.textContent = "جملات فارسی";
    quizStudyBox.classList.remove('hidden');
    for (var [sentence, value] of Object.entries(sentences1)) {
        wordsArray.push(sentence);
        englishArray.push(value.english);
        meaningsArray.push(value.meaning);
    };
}
function loadSentencesQuiz1() {
    loadSentences();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadSentencesQuiz2, loadSentencesQuiz1);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = wordsArray[randoNumber];
    secondaryCharText.textContent = meaningsArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadSentencesQuiz1, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsQuiz1() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadWordsQuiz2, loadWordsQuiz1);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = wordsArray[randoNumber];
    secondaryCharText.textContent = meaningsArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsQuiz1, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadSentencesQuiz2() {
    loadSentences();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadSentencesQuiz1, loadSentencesQuiz2);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = englishArray[randoNumber];
    secondaryCharText.textContent = meaningsArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadSentencesQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
};
function loadWordsQuiz2() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadWordsQuiz1, loadWordsQuiz2);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = englishArray[randoNumber];
    secondaryCharText.textContent = meaningsArray[randoNumber];
    // secondaryCharText.classList.add('english');
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
};
function loadSentencesMeaningsQuiz() {
    loadSentences();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadSentencesMeaningsQuiz2, loadSentencesMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = wordsArray[randoNumber];
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * wordsArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadSentencesMeaningsQuiz, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadWordsMeaningsQuiz2, loadWordsMeaningsQuiz);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = wordsArray[randoNumber];
    secondaryCharText.textContent = "";
    let answersArray = [];
    trueAnswer = meaningsArray[randoNumber];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * wordsArray.length);
        let randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz, e)
        })
        newDiv.classList.add('answer');
        answersBox.append(newDiv);
    });
};
function loadSentencesMeaningsQuiz2() {
    loadSentences();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadSentencesMeaningsQuiz, loadSentencesMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    secondaryCharText.textContent = meaningsArray[randoNumber];
    mainCharText.textContent = "";
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadSentencesMeaningsQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
};
function loadWordsMeaningsQuiz2() {
    loadWords();
    removeAllChildren(answersBox);
    removeAllChildren(flashBox);
    makeButtons(loadWordsMeaningsQuiz, loadWordsMeaningsQuiz2);
    randoNumber = Math.floor(Math.random() * wordsArray.length);
    mainCharText.textContent = meaningsArray[randoNumber];
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
        newDiv.addEventListener('click', (e) => {
            handleAnswerClick(loadWordsMeaningsQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('med');
        answersBox.append(newDiv);
    });
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