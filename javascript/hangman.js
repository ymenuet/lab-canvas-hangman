class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = words[(Math.ceil(Math.random()*(words.length - 1)))];
    this.letters = [],
    this.guessedLetters = '',
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    return this.words[(Math.ceil(Math.random()*(this.words.length - 1)))];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode>=65 && keyCode<=90){
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    let clickedLetter = true
    this.letters.forEach(element => {
      if(element === letter){
        clickedLetter = false
      }
    })
     return clickedLetter
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    if(this.checkClickedLetters(letter)===true){
      this.guessedLetters += letter
      this.letters.push(letter)
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(this.checkClickedLetters(letter)===true){
      this.letters.push(letter)
      this.errorsLeft --
    }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    let secretWordArray = this.secretWord.split('')
    return (this.guessedLetters).includes(...secretWordArray)
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // Cómo hace hangman,js para leer la clase HangmanCanvas, dentro del archivo CanvasGradient.js?

    // ... your code goes here
    hangmanCanvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
