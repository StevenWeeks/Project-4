

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
    event.target.disabled = true;
    if (this.phrases[0].checkLetter(target)) {
      event.target.classList.add("chosen")
      this.checkForWin()
    } else {
      this.removeLife()
      event.target.classList.add("wrong")
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
    hearts[0].classList.add('shakey')
    setTimeout(()=> {
      hearts[0].remove();
    }, 500)
    this.missed++
    if (this.missed === 5) {
      this.gameOver()
    }
  }
  // this method removes a life, removes a heart from the board, and, if the player
  // is out of lives, ends the game.

  checkForWin () {
    let letters = document.getElementsByClassName('correct')
    let numbNeeded = document.getElementsByClassName('letter')
    let number = 0;
    for (let i = 0; i < letters.length; i++) {
      if (letters) {
        number++;
        if (number === (numbNeeded.length)) {
          this.gameOver(true)
        }
      }
    }


    }

//  }
  // this method checks to see if the player has selected all of the letters.

  gameOver (result) {
    let restart = document.getElementById("overlay")
    let gameOver = document.getElementById('game-over-message')
    let restartButton = document.getElementById("btn__reset")
    let scoreboard = document.getElementById('scoreboard')
    let hearts = document.getElementsByClassName("liHolder")
    if (result) {
      setTimeout(() => {
        scoreboard.removeChild(hearts[0])
        restart.style.display = "block"
        restart.classList.add('win')
        gameOver.textContent = "Winner winner, chicken dinner!"
        restartButton.textContent = "Try your skill again"
      }, 500)
    } else {
      setTimeout(() =>{
        scoreboard.removeChild(hearts[0])
        restart.style.display = "block"
        restart.classList.add('lose')
        gameOver.textContent = "You lose!"
        restartButton.textContent = "Try again!"
      }, 500)
    }
  }
  // this method displays a message if the player wins or a different message if
  // they lose.

  startGame () {

    let keys = document.querySelectorAll('.key')
    keys.forEach(key => {
      if (key.classList.contains("wrong")) {
        key.classList.remove("wrong")
        key.disabled = false
      } else if (key.classList.contains("chosen")) {
        key.classList.remove("chosen")
        key.disabled = false
      }
    })

    let newPhraser = this.getRandomPhrase()
    newPhraser.addPhraseToDisplay(newPhraser.phrase)
    this.missed = 0;


    let scoreboard = document.getElementById('scoreboard')
    let ol = document.createElement('ol')
    ol.classList.add('liHolder')
    scoreboard.appendChild(ol)
    for (let i = 0; i < 5; i++) {
      let hearts = document.createElement('li')
      hearts.classList.add('tries')
      let img = document.createElement('img')
      img.src = "images/liveHeart.png";
      img.height = "73";
      img.width = "70";
      ol.appendChild(hearts)
      hearts.appendChild(img)
  }


    document.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
}

}
  // calls the getRandomPhrase() method, and adds that phrase to the board by
  // calling the Phrase class' addPhraseToDisplay() method.
