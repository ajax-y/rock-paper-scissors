# Rock Paper Scissor

**Aim:** The main goal is to create a rock paper scissors game using javascript.

## Step 01: Created the repo named rock-paper-scissors
1. First I created a git repo named ```rock-paper-scissors``` and cloned it into my local environment.
2. Then I created two files named index.html and script.js in that directory.
3. Then I commit it to my repo.

## Step 02: Created a function named getComputerChoice()
1. I opened the index.html file and link the script.js file to it.
2. I tested if the script.js file is correctly linked to the html file by running ```console.log("Hello, World!);```.
3. I confirmed the script.js is linked to the html file.
4. I created the function named ```getComputerChoice()``` and used ```Math.random()``` to generate the random number from 1 to 3 and returned it.
5. Then I commit it to my repo.

## Step 03: Created a global variable to keep track of the score
1. I created two variable named ```humanScore and computerScore``` to keep track of the score.
2. Then I commit it to my repo.

## Step 04: Created a function named getHumanChoice()
1. I created a ```getHumanChoice()``` to get the human choice.
2. Using prompt to get the input from the user.
3. If user enters the value from 1 to 3 the function returns it.
4. Else the function gave the error message ```Please enter a valid choice```.
5. Then I commit it to my repo.

## Step 05: Created a function named playRound() 
1. Created a function named ```playRound()```.
2. Written the game logic in it.
3. Then I commit it to my repo.

## Step 06: Created a function named playGame()
1. Created a function named ```playGame()```.
2. Created a loop to play the game for 5 rounds.
3. Also included the re-choice for the invalid human choice.
4. Then I commit it to my repo.