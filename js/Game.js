
// this is the Game class, it's methods control how the game acts. this.phrases
// makes a new Phrase instance based on a random phrase from the array on app.js

class Game {
  constructor (missed, phrases) {
    this.missed = missed;
    this.phrases = phrases.map((phrase) => new Phrase(phrase))
  }
  // function gets a random phrase from the provided array on app.js
  getRandomPhrase () {
    let aPhrase = this.phrases
    var thePhrase = aPhrase[Math.floor(Math.random() * aPhrase.length)]
    return thePhrase
  }



// this disables keys if they're clicked
  handleInteraction (target) {
    event.target.disabled = true;
    // check if the checkletter statement is true, then adds Chosen to target keys
    // and checks
    // for win function
    if (this.phrases[0].checkLetter(target)) {
      event.target.classList.add("chosen")
      this.checkForWin()
      // if checkLetter is false, remove a heart and target key has wrong class added
    } else {
      this.removeLife()
      event.target.classList.add("wrong")
    }
  }

  // function used to remove hearts from screen and add count to this.misses,
  // when this.missed count is equal to 5 then gameover()
  // no definition in this.gameOver() so it'll trigger lose scenario.
  removeLife () {
    let hearts = document.getElementsByClassName('tries')
    hearts[0].classList.add('shakey')
    setTimeout(()=> {
      hearts[0].remove();
    }, 300)
    this.missed++
    if (this.missed === 5) {
      this.gameOver()
    }
  }

// function compares the amount of letters in the random phrase to the letters
// with class correct, and if  equal it triggers this.gameOver(true).  it has true
// so that it'll come out with a definition and trigger win scenario.
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

// function that triggers in a win or lose scenario.  Removes the ol element,
// changes the display to the overlay and the correct class based on a win/lose
// shows appropriate message for win/lose  and adds back the button to start new
// game
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

// function that clears all wrong/chosen  classes from keys
// enables all the keys again
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
    // gets a new random phrase for the game and resets this.missed and tells it
    // to call Phrase.addPhraseToDisplay() with callback of this.getRandomPhrase
    let newPhraser = this.getRandomPhrase()
    newPhraser.addPhraseToDisplay(newPhraser.phrase)
    this.missed = 0;

    // this adds the hearts to the bottom of the screen,
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

    // saw Warren Leyes telling Reggie Williams about this function to keep
    // folks from cheating by highlighting the phrase.
    document.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
}

}
