const prompt=require("prompt-sync")();
let humanScore=0, compScore=0;
function getComputerChoice()
{
    let x=Math.random();
    if(x>=0 && x<0.33)
    {
        console.log("rock");
    }
    else if(x>=0.33 && x<0.66)
    {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
}
getComputerChoice();
function getHumanChoice()
{
    let move=prompt("Play your turn: ");
}
getHumanChoice();

function playRound(humanChoice, compChoice)
{
    getComputerChoice();
    getHumanChoice();
    
}