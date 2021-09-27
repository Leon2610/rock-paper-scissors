function computerPlay() {

    let x = Math.floor((Math.random() * 3) + 1);

    if (x == 1) {
        return "rock";
    } else if (x == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock ";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        points++;
        return "You Win! Rock beats Scissors ";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        points++;
        return "You Win! Paper beats Rock ";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper ";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        points++;
        return "You Win! Scissors beats Paper ";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors ";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie! Both play Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie! Both play paper";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie! Both play Scissors ";
    } else {
        return "Enter a valid argument!";
    }
}

let points = 0;

function game() {
    for (let i = 1; i < 6; i++) {
        console.log("Round: " + i); 
        const playerSelection = prompt("Enter rock, paper or scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("Points you have " + points);
    }
}

game();


