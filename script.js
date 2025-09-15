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

let humanScore = 0;
let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
    console.log("Draw");
 } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore += 1;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
    computerScore += 1;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human chose:", humanSelection);
console.log("Computer chose:", computerSelection);

