

function getRandomNum(max) {
    return Math.floor(Math.random() * 3); // GENERATE A RANDOM NUMBER BETWEEN 0 AND 2
}

function getComputerChoice() { // TRANSFORM THE COMPUTER'S NUMBER INTO A VALID STRING

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



function playGame() {

    let humanScore = 0;
    let computerScore = 0; // SET BOTH SCORES TO 0 IN THE BEGINNING

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();  

        function playRound(humanChoice, computerChoice) {

            if (humanChoice === computerChoice) { // DRAW
                console.log(`It's a draw! You both chose ${computerChoice}.`);
            } else if (humanChoice === "rock" && computerChoice === "paper") { // ROCK VS PAPER
                computerScore++;
                console.log("You lose! Rock does not beat paper.");
            } else if (humanChoice === "rock" && computerChoice === "scissors") { // ROCK VS SCISSORS
                humanScore++;
                console.log("You win! Rock beat scissors.");
            } else if (humanChoice === "scissors" && computerChoice == "paper") { // SCISSORS VS PAPER
                humanScore++;
                console.log("You win! Scissors beat paper.");
            } else if (humanChoice === "scissors" && computerChoice === "rock") { // SCISSORS VS ROCK
                computerScore++;
                console.log("You lost! Scissors does not beat rock.");
            } else if (humanChoice === "paper" && computerChoice === "rock") { // PAPER VS ROCK
                humanScore++;
                console.log("You win! Paper beats rock.");
            } else if (humanChoice === "paper" && computerChoice === "scissors") { // PAPER VS SCISSORS
                computerScore++;
                console.log("You lose! Paper does not beat scissors.");
            }
            let score = `Human: ${humanScore} Computer: ${computerScore}`;
            return score; 
        }

        console.log(playRound(humanSelection, computerSelection)); 
    }
    console.log("We're done for today!")
    console.log(`Ladies, gentleman, and non-binary folks! We're done for today!

The final score was:
-----------------------------------------------
    Human: ${humanScore}
    Computers: ${computerScore}
-----------------------------------------------
        
Please come again to beat machines in the game.* 


*Might have consequences in the near robotic future.`);
}

// console.log(playRound(humanSelection, computerSelection));

console.log(playGame())