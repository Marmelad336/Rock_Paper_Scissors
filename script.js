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

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    const resultsDiv = document.getElementById("results");

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

        resultsDiv.innerHTML += `<p>Score: You ${humanScore} - Computer ${computerScore}</p>`;

           if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            resultsDiv.innerHTML += `<h2>You are the winner</h2>`;
        } else {
            resultsDiv.innerHTML += `<h2>Computer wins</h2>`;
        }
       
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
})