function computerNumber(){
    const randomNumber = Math.floor(Math.random()*3)

    if(randomNumber===o){
        return "rock"
    } else if(random ===1){
        return "paper"
    }else {
        return "scissor"
    }
}

function humanNumber (){
    const humanChoice = prompt(" Choose rock, paper or scissor")

    return humanChoice.toLocaleLowerCase();
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(randomNumber, humanChoice){
        console.log ("Computer choice is " + computerNumber)
        console.log(" While you chose " + humanNumber)

        if (humanChoice === randomNumber){
            console.log("Its a draw")
        }else if(
            humanChoice === "rock" && randomNumber === "scissor" ||
            humanChoice === "paper" && randomNumber === "rock" ||
            humanChoice === "scissor" && randomNumber === "paper" 
        ){
            humanScore ++
            console.log("You win")
        }else{
            computerScore ++
            console.log("Thee computer wins this round")
        }
    }
    console.log("Your score is " + humanScore)
    console.log("Thee comps score is " + computerScore)
}

for (let i=0; i<5; i++){
    const humanSelection = humanChoice();
    const compSelection = computerNumber()

    playRound(humanSelection, compSelection)
}

console.log("Game Over")
console.log("Your score is " + humanScore)
console.log("Comps Score is " + computerScore)

if (humanScore>computerScore){
    console.log("And the winner is YOU")
}else if (humanScore<computerScore){
    console.log("And the winner is Thee Computer")
}else(
    console.log("And we got a DRAw")
)

playGame()