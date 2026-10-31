function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}
function getHumanChoice() {
    let humanChoice = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors\nEnter your choice(1/2/3): "));
    if (humanChoice == 1 || humanChoice == 2 || humanChoice == 3){
        return humanChoice;
    }else {
        console.log("Please enter a valid choice.");
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;