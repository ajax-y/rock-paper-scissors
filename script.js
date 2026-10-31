let humanScore = 0;
let computerScore = 0;

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
        return getHumanChoice();
    }
}
function playRound(humanChoice, computerChoice) {
    if(humanChoice == 1) {
        if(computerChoice == 1){
            console.log(`Tie Game!`);
        }else if(computerChoice == 2) {
            console.log(`You Lose! Paper beats Rock.`);
            computerScore++;
        }else {
            console.log(`You Won! Rock beats Paper.`);
            humanScore++;
        }
    }else if(humanChoice == 2) {
        if(computerChoice == 2) {
            console.log(`Tie Game!`);
        }else if(computerChoice == 3) {
            console.log(`You Lose! Scissor beats Paper.`);
            computerScore++;
        }else {
            console.log(`You Won! Paper beats Rock.`);
            humanScore++;
        }
    }else {
        if(computerChoice == 3) {
            console.log(`Tie Game!`);
        }else if(computerChoice == 1) {
            console.log(`You Lose! Rock beats Scissor.`);
            computerScore++;
        }else {
            console.log(`You Won! Scissor beats Paper.`);
            humanScore++;
        }
    }
}
function playGame() {
    for (let round = 1; round <= 5; round++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);       
    }

    console.log("====== [Game Result] ======");
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You Won!");
    }else if(computerScore > humanScore) {
        console.log("You Lose!");
    }else {
        console.log("Tie Game!");
    }
}
playGame();