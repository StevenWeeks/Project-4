

class Game {
  constructor (missed, phrases) {
    this.missed = missed;
    this.phrases = phrases.map((phrase) => new Phrase(phrase))
  }
  getRandomPhrase () {
    let aPhrase = this.phrases
    var thePhrase = aPhrase[Math.floor(Math.random() * aPhrase.length)]
    return thePhrase
  }


  // this method randomly retrieves one of the phrases stored in the phrases array

  handleInteraction (target) {
    if (a) {
            key.classList.add('right'),
            this.checkForWin()

      } else {
        this.removeLife()

      }
    }

  /* this method checks to see if the button clicked by the player matches a letter
 in the phrase.
 If it does not, then call the removeLife() method..
If the selected letter matches, call the showMatchedLetter() method on the
phrase and then call the checkForWin() method.
*/

  removeLife () {
    let hearts = document.getElementsByClassName('tries')
      hearts[0].remove();
      this.missed ++
        if(this.missed = 5){
          this.gameOver()
        }
    }
  // this method removes a life, removes a heart from the board, and, if the player
  // is out of lives, ends the game.

  checkForWin () {
    let letters = this.getRandomPhrase()
    let lettersNeeded = letters.length


    }

//  }
  // this method checks to see if the player has selected all of the letters.

  gameOver (result) {
  let restart = document.getElementById("overlay")
  let gameOver = document.getElementsByClassName('game-over-message')
    if (result) {
    restart.style.display = "block"
    gameOver.innerHtml = "Winner winner, chicken dinner!"


  } else {
  restart.style.display = "block"
  gameOver.innerHtml = "You lose!"

    }

    }
  // this method displays a message if the player wins or a different message if
  // they lose.

  startGame () {
    let keyboardArea = document.querySelector('#qwerty')
    let keys = keyboardArea.querySelectorAll('button')
    // keys.classList.Remove("wrong", "right")
    let newPhraser = this.getRandomPhrase()
    newPhraser.addPhraseToDisplay(newPhraser.phrase)
    this.missed = 0;
}

}
  // calls the getRandomPhrase() method, and adds that phrase to the board by
  // calling the Phrase class' addPhraseToDisplay() method.
