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

 console.log(getComputerChoice())

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

const humanChoice = getHumanChoice();
console.log(humanChoice);