function getRandomNum(max) {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {

    let randomNumber = getRandomNum();

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    let choice = prompt("Do you choose rock, paper or scissors?");
    return choice;
}

function validateHumanChoice() {
    let regularHumanChoice = getHumanChoice();
    let humanChoice = regularHumanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper" ) {
        return humanChoice;
    } else {
       alert("Please choose between rock, paper or scissors. Check for any spelling errors.");
       return
    }

}

console.log(validateHumanChoice());
