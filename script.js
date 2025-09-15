function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
   
    if (randomNum === 0) {
        return "Rock"; }
    else if (randomNum === 1) {
        return "Paper"
    } 
    else {
        return "Scissors"
    }
}

 function getHumanChoice() {
    const raw = prompt("Choose: Rock, Paper or Scissors");

    if (raw === null) {
        return null;
    }


    if (raw === "Rock") {
        return "Rock"; 
    }
    else if (raw === "Paper") {
        return "Paper";
    } 
    else if (raw === "Scissors"){
        return "Scissors";
    
    }
 }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (!humanSelection) {
            console.log("No input. Round skipped.");
            continue;
        }

    
        if (humanSelection === computerSelection) {
            console.log("Draw");
        } else if (
            (humanSelection === "Rock" && computerSelection === "Scissors") ||
            (humanSelection === "Scissors" && computerSelection === "Paper") ||
            (humanSelection === "Paper" && computerSelection === "Rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        }

        console.log(`Round ${round} choices -> Human: ${humanSelection}, Computer: ${computerSelection}`);
        console.log(`Score after round ${round}: You ${humanScore} - Computer ${computerScore}`);
        console.log("---------------------------------------------------");
    }

    console.log("Final Score:", humanScore, "-", computerScore);

    if (humanScore > computerScore) console.log("You are the overall winner!");
    else if (computerScore > humanScore) console.log("Computer wins the game!");
    else console.log("The game is a draw!");
}

playGame();