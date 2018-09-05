document.getElementById("btn__reset").addEventListener('click', resetDisplay)
// Add an event listener to the "Start Game" button which calls the resetDisplay()
// function, creates a new Game object, and starts the game.
var phrase = [
  'cowabunga',
  'radical',
  'you lose',
  'ice ice baby',
  'honk honk',
  'it worked'
]
var randomPh = new Game(0, phrase)

let qwert = document.getElementsByClassName('key')
for (let i = 0; i < qwert.length; i++) {
  qwert[i].addEventListener('click', markButton)
}

function resetDisplay () {
  document.getElementById("overlay").style.display = "none"
  let overlay = document.getElementById("overlay")
  overlay.classList.remove('win')
  overlay.classList.remove('lose')
  randomPh.startGame()
}

function markButton () {
  let thisGuess = event.target.textContent
   randomPh.handleInteraction(thisGuess)
  }







// Add event listeners to each of the keyboard buttons, so that clicking a button
// calls the markButton() function.
