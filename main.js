function getRandomNum(max) {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {

    let randomNumber = getRandomNum()

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {
    prompt("Do you choose rock, paper or scissors?")
}

console.log(getHumanChoice());
