let randomNumber = parseInt(Math.floor(Math.random()*100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

//it will store the previous guessed value
let prevGuess = []
//it displays how many guesses player have made
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    //here we check if the guessed number is valid or not
    //and if it is valid then we will check for the number of guesses we have madi
    //and add previous guesses to an array called prevGuess
    if(guess > 100 || guess < 1 || isNaN(guess)) {
          alert('Please enter a valid Entry')
    }
    else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game Over random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    //here we check if the guesses number is equal to or less than or greater than the random number
    if(guess === randomNumber){
        displayMessage(`you guessed right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`number is Too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`number is Too high`)
    }
}
function displayGuess(guess){
    //here we will first clean the entered value first
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    remaining.innerHTML = `${11-numGuess}`
    numGuess++
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    //disables is set in key value pair so e left value a empty
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">'Game Over!'</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.floor(Math.random()*100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true
    })
}
