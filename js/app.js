// clicking the button activates resetDisplay()
document.getElementById("btn__reset").addEventListener('click', resetDisplay)
// the phrases to be used
var phrase = [
  'cowabunga',
  'radical',
  'you lose',
  'ice ice baby',
  'honk honk',
  'it worked'
]
// this makes a new instance of class Game, and uses the prhases above
var randomPh = new Game(0, phrase)
// adding click listening to all the keys on the screen
let qwert = document.getElementsByClassName('key')
for (let i = 0; i < qwert.length; i++) {
  qwert[i].addEventListener('click', markButton)
}
// this function when called starts a new Game from the above array
// , removes overlay classes
function resetDisplay () {
  document.getElementById("overlay").style.display = "none"
  let overlay = document.getElementById("overlay")
  overlay.classList.remove('win')
  overlay.classList.remove('lose')
  randomPh.startGame()
}
// this function is used to mark the keys that are pressed, and activates
// handleInteraction()
function markButton () {
  let thisGuess = event.target.textContent
   randomPh.handleInteraction(thisGuess)
  }







// Add event listeners to each of the keyboard buttons, so that clicking a button
// calls the markButton() function.
