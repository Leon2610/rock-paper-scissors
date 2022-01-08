const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const pointsUserDisplay = document.getElementById('pointsUser');
const pointsComputerDisplay = document.getElementById('pointsComputer');
const btns = document.querySelectorAll('img');

let userChoice;
let computerChoice;
let result;
let pointsUser = 0;
let pointsComputer = 0;



btns.forEach(btn => btn.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerPlay();
    playRound(userChoice,computerChoice);
}))

function computerPlay() {

    let x = Math.floor((Math.random() * 3) + 1);

    if (x == 1) {
        computerChoice = "rock";
    } else if (x == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock ";
        pointsComputer++;
    } 
    if (playerSelection === "rock" && computerSelection === "scissors") {
        pointsUser++;
        result = "You Win! Rock beats Scissors ";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        pointsUser++;
        result =  "You Win! Paper beats Rock ";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper ";
        pointsComputer++;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        pointsUser++;
        result = "You Win! Scissors beats Paper ";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors ";
        pointsComputer++;
    }
    if (playerSelection === computerSelection) {
        result = "Tie! Both play Rock";
    }

    resultDisplay.innerHTML = result;
    pointsUserDisplay.innerHTML = pointsUser;
    pointsComputerDisplay.innerHTML = pointsComputer;

}

console.log('Asi que eres curioso y te metiste a ver el codigo!!! JAJA, Hazme saber si leiste esto! Att: Leo')




