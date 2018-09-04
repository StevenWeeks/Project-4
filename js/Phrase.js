class Phrase {
  constructor (phrase) {
    this.phrase = phrase
}
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


  /* this adds letter placeholders to the display when the game starts.
  Each letter is presented by an empty box, one list item for each letter.
  See the example_phrase_html.txt file for an example of what the render HTML
  for a phrase should look like when the game starts. When the player correctly
  guesses a letter, the empty box is replaced with a the matched letter
  (see the showMatchedLetter() method below. Make sure the phrase displayed on
  the screen doesn't include spaces.
  */

  checkLetter (target) {
    let randLets = [].slice.call(document.querySelectorAll('letter'))
    let guess = target
    for (let i = 0; i < randLets.length; i++) {
      if (randLets[i] === guess) {
        this.showMatchedLetter(guess)
      }
    }
  }


// checks to see if letter selected by player matches a letter in the phrase.

  showMatchedLetter (guess) {
    let letters = document.getElementsByClassName("letter")
    let arrLets = Array.from(letters)
    for (let i = 0; i < arrLets.length; i++) {
      if (arrLets[i].textContent === guess) {
        arrLets[i].style.color = "blue";
      }
    }
  }


}
// reveals the letter(s) on the board that matches player's selection.
