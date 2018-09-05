class Phrase {
  constructor (phrase) {
    this.phrase = phrase
}
  // takes the phrase passed to it from Game.js, then splits the letters and spaces
  // then adds the letters and spaces to the ul as lis, then makes the variable
  // invisStart the innterHTML of the phrase area.

  addPhraseToDisplay () {
    let phraseObject = this.phrase.split("");
    let invisStart = '<ul>'
    for(let i = 0; i < phraseObject.length; i++) {
      if(phraseObject[i] !== " ") {
        invisStart += `<li class="hide letter ${phraseObject[i]}">${phraseObject[i]}</li>`
      } else {
        invisStart += `<li class="space"> </li>`
      }
    }
    invisStart += '</ul>'
    let theBoard = document.getElementById('phrase')
    theBoard.innerHTML = invisStart
  }
// used to see if the target letter chosen by the player is anywhere in the
// phrase and returns true so handleInteraction() knows to add 'chosen' or 'wrong'
// tried a forEach here, but found out it doesn't stop after each to give
// handleInteraction() a true statement, where a for statement does.
  checkLetter (target) {
    let randLets = [].slice.call(document.querySelectorAll(".letter"))
    for (let i = 0; i < randLets.length; i++) {
      if (randLets[i].textContent === target) {
        this.showMatchedLetter(target)
        return true;
      }
    }

  }

// collects all the letters in the phrase and sees if it's the same as the player's
// selection, and if it does it turns the letter blue in the phrase area.  Also
// adds the correct class so my checkForwin function works correctly.

  showMatchedLetter (target) {
    let letters = document.querySelectorAll(".letter")
    letters.forEach(targs => {
      if (targs.textContent === target) {
        targs.style.color = "blue";
        targs.classList.add('correct')
      }
    })
  }
}
