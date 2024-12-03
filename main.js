let humanScore = 0;
let computerScore = 0;

function getRandomNum(max) {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {

    let randomNumber = getRandomNum();

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getRawHumanChoice() {
    let choice = prompt("Do you choose rock, paper or scissors?");
    return choice;
}

function getHumanChoice() {
    let regularHumanChoice = getRawHumanChoice();
    let humanChoice = regularHumanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper" ) {
        return humanChoice;
    } else {
       alert("Please choose between rock, paper or scissors and check for any spelling errors. F5 to retry.");
       return
    }

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return `It's a draw! You both chose ${computerChoice}.`
    }

}

console.log(getHumanChoice());
