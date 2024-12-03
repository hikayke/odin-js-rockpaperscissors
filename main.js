let humanScore = 0;
let computerScore = 0; // SET BOTH SCORES TO 0 IN THE BEGINNING

function getRandomNum(max) {
    return Math.floor(Math.random() * 3); // GENERATE A RANDOM NUMBER BETWEEN 0 AND 2
}

function getComputerChoice() { // TRANSFORM THE COMPUTER'S NUMBER INTO A VALID STIRNG

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
    let choice = prompt("Do you choose rock, paper or scissors?"); // PROMPT FOR HUMAN CHOICE AND STORE IT IN A VARIABLE
    return choice;
}

function getHumanChoice() {
    let regularHumanChoice = getRawHumanChoice();
    let humanChoice = regularHumanChoice.toLowerCase(); // CHANGED HUMAN CHOICE TO CASE INSENSITIVE

    if (humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper" ) {
        return humanChoice;
    } else {
       alert("Please choose between rock, paper or scissors and check for any spelling errors. F5 to retry.");
       return
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { // DRAW
        return `It's a draw! You both chose ${computerChoice}.`
    } else if (humanChoice === "rock" && computerChoice === "paper") { // ROCK VS PAPER
        computerScore = computerScore + 1; // INCREASED COMPUTER SCORE
        return "You lose! Rock does not beat paper.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") { // ROCK VS SCISSORS
        humanScore = humanScore + 1; // INCREASED HUMAN SCORE
        return "You win! Rock beat scissors.";
    } else if (humanChoice === "scissors" && computerChoice == "paper") { // SCISSORS VS PAPER
        humanScore = humanScore + 1; // INCREASED HUMAN SCORE
        return "You win! Scissors beat paper.";
    } else if (humanChoice === "scissors" && computerChocie === "rock") { // SCISSORS VS ROCK
        computerScore = computerScore + 1; // INCREASED COMPUTER SCORE
        return "You lost! Scissors does not beat rock.";
    } else if (humanChoice === "paper" && computerChoice === "rock") { // PAPER VS ROCK
        humanScore = humanScore + 1; // INCREASED HUMAN SCORE
        return "You win! Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") { // PAPER VS SCISSORS
        computerScore = computerScore + 1; // INCREASED COMPUTER SCORE
        return "You lose! Paper does not beat scissors."
    }

}

playRound(humanSelection, computerSelection);

console.log(getHumanChoice());
