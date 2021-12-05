const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
    "Merry Christmas!",
    "Merry Christmas, dear!",
    "Merry Christmas, and a happy New Year!",
    "Wishing you a Merry Christmas filled with good times",
    "Merry Christmas, ya filthy animal!",
    "Merry Christmas! Don’t worry, this card has been SANTA-tized!",
    "Merry Christmas! Wishing you all the happiness in the world.",
    "Merry Christmas! May you have a wonderful day!",
]

// Task:
// Write a function to display a random greeting in the card.
function writeGreeting(){
    let item = Math.floor (Math.random() * greetings.length)
    greetingDisplay.textContent = greetings[item]
}
writeGreeting()
