let hmtlScore = document.querySelector('.number')
let hands = document.querySelector('.hands')
let result = document.querySelector('.result')
let userPicked = document.querySelector('#userPicked')
let pc = document.querySelector('#hausePicked')
let voice = document.querySelector('.txt')
let rules = document.querySelector('.rules')
let rulesQuit = document.querySelector('.rulesquit')
let span = document.querySelector('.rulespan')

// console.log(spock);
// console.log(hands, 'this are the hands');

let rock = './assests/Rock.png'
let paper = './assests/Paper.png'
let scissors = './assests/Scissors.png'
let lizard = './assests/lizard.png'
let spock = './assests/spock.png' 

let score = 0
let handPicked 
let AI
let winP = 'You win'
let winAi = 'You lost'
const getRandomInt = () => Math.floor(Math.random() * (6 - 1)) + 1

const winner = (player, pc) => {
    if(player === 1 && pc === 1){
        userPicked.src = rock
        document.querySelector('#hausePicked').src = rock
        return 'its a tie'
    }
    if(player === 1 && pc === 2){
        userPicked.src = rock
        document.querySelector('#hausePicked').src = paper
        return winAi
    }
    if(player === 1 && pc === 3){
        userPicked.src = rock
        document.querySelector('#hausePicked').src = scissors
        return winP
    }
    if(player === 1 && pc === 4){
        userPicked.src = rock
        document.querySelector('#hausePicked').src = lizard
        return winP
    }
    if(player === 1 && pc === 5){
        userPicked.src = rock
        document.querySelector('#hausePicked').src = spock
        return winAi
    }
    if(player === 2 && pc === 1){
        userPicked.src = paper
        document.querySelector('#hausePicked').src = rock
        return winP
    }
    if(player === 2 && pc === 2){
        userPicked.src = paper
        document.querySelector('#hausePicked').src = paper
        return 'its a tie'
    }
    if(player === 2 && pc === 3){
        userPicked.src = paper
        document.querySelector('#hausePicked').src = scissors
        return winAi
    }
    if(player === 2 && pc === 4){
        userPicked.src = paper
        document.querySelector('#hausePicked').src = lizard
        return winAi
    }
    if(player === 2 && pc === 5){
        userPicked.src = paper
        document.querySelector('#hausePicked').src = spock
        return winP
    }
    if(player === 3 && pc === 1){
        userPicked.src = scissors
        document.querySelector('#hausePicked').src = rock
        return winAi
    }
    if(player === 3 && pc === 2){
        userPicked.src = scissors
        document.querySelector('#hausePicked').src = paper
        return winP
    }
    if(player === 3 && pc === 3){
        userPicked.src = scissors
        document.querySelector('#hausePicked').src = scissors
        return 'its a tie'
    }
    if(player === 3 && pc === 4){
        userPicked.src = scissors
        document.querySelector('#hausePicked').src = lizard
        return winP
    }
    if(player === 3 && pc === 5){
        userPicked.src = scissors
        document.querySelector('#hausePicked').src = spock
        return winAi
    }
    if(player === 4 && pc === 1){
        userPicked.src = lizard
        document.querySelector('#hausePicked').src = rock
        return winAi
    }
    if(player === 4 && pc === 2){
        userPicked.src = lizard
        document.querySelector('#hausePicked').src = paper
        return winP
    }
    if(player === 4 && pc === 3){
        userPicked.src = lizard
        document.querySelector('#hausePicked').src = scissors
        return winAi
    }
    if(player === 4 && pc === 4){
        userPicked.src = lizard
        document.querySelector('#hausePicked').src = lizard
        return 'its a tie'
    }
    if(player === 4 && pc === 5){
        userPicked.src = lizard
        document.querySelector('#hausePicked').src = spock
        return winP
    }
    if(player === 5 && pc === 1){
        userPicked.src = spock
        document.querySelector('#hausePicked').src = rock
        return winP
    }
    if(player === 5 && pc === 2){
        userPicked.src = spock
        document.querySelector('#hausePicked').src = paper
        return winAi
    }
    if(player === 5 && pc === 3){
        userPicked.src = spock
        document.querySelector('#hausePicked').src = scissors
        return winP
    }
    if(player === 5 && pc === 4){
        userPicked.src = spock
        document.querySelector('#hausePicked').src = lizard
        return winAi
    }
    if(player === 5 && pc === 5){
        userPicked.src = spock
        document.querySelector('#hausePicked').src = spock
        return 'its a tie'
    }
    else return 'Its a tie'
}

const play = (index) => {
    hands.style.display='none'
    result.style.display='flex'
    AI = getRandomInt() 
    handPicked = index
    let ganador
    ganador = winner(handPicked, AI)
    if(ganador === winP){
        score++
        hmtlScore.innerHTML = score
        voice.innerHTML = 'You Win beibi'
    }
    if(ganador === winAi){
        score--
        hmtlScore.innerHTML = score
        voice.innerHTML = 'You Lost'
    }
    if(ganador === 'its a tie'){
        voice.innerHTML = `its a tie`
    } 
}

const playAgain = () => {
    hands.style.display = 'flex'
    result.style.display = 'none'
}

const rulesEnter = () =>{
    span.style.display = 'flex'
    hands.style.display = 'none'
    rules.style.display= 'none'
    rulesQuit.style.display= 'flex'
}
const rulesOut =() =>{
    hands.style.display = 'flex'
    span.style.display = 'none'
    rules.style.display= 'flex'
    rulesQuit.style.display= 'none'
}

// rules.addEventListener("mouseenter", function( event ) {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";
  
//     // reset the color after a short delay
//       rulesEnter()
//   }, false);
  
//   // This handler will be executed every time the cursor
//   // is moved over a different list item
//   rules.addEventListener("onmouseout", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//       rulesOver()
//     }, 500);
//   }, false);