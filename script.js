const prompt=require("prompt-sync")();
let humanScore=0, compScore=0;
function getComputerChoice()
{  
    let x=Math.random();
    let comp;
    if(x>=0 && x<0.33)
    {
        comp="rock";
    }
    else if(x>=0.33 && x<0.66)
    {
        comp="paper";
    }
    else {
        comp="scissors";
    }
    console.log("Computer: "+comp);
    return comp;
   
}

function getHumanChoice()
{
    let move=prompt("Play your turn: ");
    return String(move).toLowerCase();
}

function playRound(humanChoice, compChoice)
{ let result;
    if(humanChoice==="rock" && compChoice==="paper")
    {
        result="You lose! Paper beats Rock";
        compScore+=1;
    }
    else if(humanChoice==="paper" && compChoice==="rock")
    {
        humanScore+=1;
        result="You Win! Paper beats Rock";
    }
    else if(humanChoice==="rock" && compChoice==="scissors")
    {
        result="You Win! Paper beats Scissors";
        humanScore+=1;
    }
    else if(humanChoice==="scissors" && compChoice==="rock")
    {
        compScore+=1;
        result="You Lose! Paper beats Scissors";
    }
    else if(humanChoice==="scissors" && compChoice==="paper")
    {
        humanScore+=1;
        result="You Win! Scissors beats Paper";   
    }
    else if(humanChoice==="paper" && compChoice==="scissors")
    {
        result="You lose! Scissors beats Paper";
        compScore+=1;
    }
    else
    {
        result="Draw";
    }
    console.log(`${result}`);
  return result;  
}

function playGame()
{ let win;
    for(let i=0;i<5;i++)
    {
        const compSelect=getComputerChoice();
        const humanSelect=getHumanChoice();
        playRound(humanSelect,compSelect);
    }
    if(humanScore>compScore)
    {
        win="Human Wins! All hail Human.";
    }
    else if(compScore>humanScore)
    {
        win="Computer Wins! All hail Computer.";
    }
    else{
        win="Draw!Better luck next time!";
    }
    console.log(`${win}`);
    return win;
}
playGame();