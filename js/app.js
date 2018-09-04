document.getElementById("btn__reset").addEventListener('click', () => {
  resetDisplay();
})
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

let qwert = document.getElementById('qwerty')
qwert.addEventListener('click', (e) => {
  let letter = e.target
   markButton(letter)
})

function resetDisplay () {
  document.getElementById("overlay").style.display = "none"
  randomPh.startGame()
}

function markButton (target) {
  let thisGuess = target.textContent
    randomPh.handleInteraction(thisGuess)
    console.log(thisGuess)
  }







// Add event listeners to each of the keyboard buttons, so that clicking a button
// calls the markButton() function.
