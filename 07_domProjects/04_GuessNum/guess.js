// this method gives the random value between o to 1, but not the 1.

// you can control the range of random of num you want like if you want 0 to 5 then multiply by 5 or if you want 0 to 10 the * 10, but some time we could get 0 value too so if we donot want that we could add + 1 to avoid that case.  all comes in decimal so we will use another method by wraping it up with math.floor method, you can use .round too
// ---> console.log(Math.floor(Math.random()* 5 + 1));

// and we could also wrap it up into the int by parseInt and console is used just to check the code testing workflow
// ---> parseInt(Math.random()* 5 + 1);

let randomNum = parseInt(Math.random()* 100 + 1);

const select = (para) => document.querySelector(para);

const submit = select('#subt');
const userInput = select('#guessField');
const guessSlot = select('.guesses');
const remaining = select('.lastResult');
const lowOrHi = select('.lowOrHi');
const startOver = select('.resultParas');
// const userName = String(select('#userName'))

const p = document.createElement('p');
p.style.backgroundColor = 'grey';
p.style.border = '2px solid black';
p.style.borderRadius = '22px';
p.style.width = '50%';
p.style.padding = '12px';
p.style.margin = 'auto';



let prevGuess = []
let numGuess = 0; // Maximum number of guesses allowed 10
let playGame = true;


if(playGame){
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    // validate the guess if the user is entering the validation num as game requirement

    if(isNaN(guess) || guess < 1  || guess > 100){
        alert('Please enter a valid number');
    } 
    
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over!! Random number was ${randomNum}`)
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // to check if the guess is right
    if (guess === randomNum) {
        displayMessage(`Yahoo! Congrats, You guessed it right num ${guess}.`);
    } else if (guess < randomNum) {
        displayMessage('Num is too low...');
    } else if (guess > randomNum){
        displayMessage('Num is too high....');
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerText += `${guess} ,  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = select('#newGame')
    newGameBtn.addEventListener('click', (event) => {
        randomNum = parseInt(Math.random()* 100 + 1);
        prevGuess = []; // reset data
        numGuess = 0;
        guessSlot.innerHTML =''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;

    })
}

