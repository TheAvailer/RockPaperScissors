function computerPlay(){
    let choice = "";
    const guessNum = Math.floor(Math.random() * 3) + 1;
    if(guessNum === 1) choice = "rock";
    else if (guessNum === 2) choice = "paper";
    else choice = "scissors";
    console.log("CPU chose " + choice);
    return choice;
}

function playAgainstCPU(playerChoice, CPUChoice){

    if (CPUChoice.includes("rock")){
        if (playerChoice.includes("rock")) return "Rock and Rock draw.";
        else if (playerChoice.includes("paper")) return "Paper beats rock, You win...";
        else return "You lose! Rock decimates scissors you lose idiot!!!";
    } else if (CPUChoice.includes("paper")){
        if (playerChoice.includes("rock")) return "You lose! Paper decimates rocks you loser!!! You always lose!!!!";
        else if (playerChoice.includes("paper")) return "Paper band paper draws.";
        else return "You got lucky and get the win, chump.";
    } else if(CPUChoice.includes("scissors")){
        if (playerChoice.includes("rock")) return "You barely edged out a win huh, for once.";
        else if (playerChoice.includes("paper")) return "You're so bad at this. Scissors shredded your paper. You lose";
        else return "Draw. which i suppose is a victory for you.";
    }
}

function winLoseDraw(stringResult){
    let result = 0; // 0 is a draw, 1 is a win, 2 is a loss
    let str = stringResult;
    if (str.includes("win")) result = 1;
    else if (str.includes("lose")) result = 2;
    return result;
}

function game(){
    let playerChoice = "";
    let playerPoints = 0;
    let CPUPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = ('"' + (window.prompt("Please input your choice (Rock, Paper or Scissors)")) + '"');
        playerChoice = playerChoice.toLowerCase();
        let statement = playAgainstCPU(playerChoice, computerPlay());
        window.alert(statement);
        theResult = winLoseDraw(statement);
        console.log(theResult + " is the result")
        if (theResult === 2){
            CPUPoints +=1;
        } else if (theResult === 1){
            playerPoints +=1;
        }
        window.alert("Player points: " + playerPoints + ". CPU points: " + CPUPoints + ".");
    }
    if (playerPoints > CPUPoints) {
        window.alert("wow .. you finally won for once in your life.");
    }
    else if(playerPoints < CPUPoints){
        cwindow.alert("The usual :) you're a loser.");
    }
    else {
        window.alert("A draw eh ? life might be getting better for you after all.");
    }
}