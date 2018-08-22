let playerPoints=0;
let computerPoints=0;
let nDraw=0;
let nSet=1;
let value=null;


const displayPlayer= document.querySelector("#playerScore");
const displayComputer= document.querySelector("#computerScore");
const msg = document.querySelector('#message');
const pPoints = document.querySelector('#pPoints');
const cPoints = document.querySelector('#cPoints');

let playerSelection ="";
let computerSelection ="";

// That function will randomly return Rock, Paper or Scissor
function computerPlay()
{
    let answerNum = randomNumber(3);
    if(answerNum==0) return "rock";
    if(answerNum==0) return "paper";
    else return "scissors";
}

//Random integer number between 1 and the number
function randomNumber(number){
    return Math.floor(Math.random()*number);
}

function playRound(playerSelection,computerSelection){

    if(playerSelection==computerSelection){
        return "none";
    }

    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                winner = "Computer";
            }else{
                winner = "Player";
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                winner = "Computer";
            }else{
                winner = "Player";
            }
            break;
        case"scissors":
        default:
            if(computerSelection == "rock"){
                winner = "Computer";
            }else{
                winner = "Player";
            }
    }
     return winner;
}

function game(){


    while (playerPoints<5 && computerPoints<5)
    {
        playerSelection=prompt("Round "+nGame+": What is your choice (rock, scissors or paper)?");

        if (!checkValidity(playerSelection)){
            continue;
        }

        computerSelection=computerPlay();

        winner=playRound(playerSelection,computerSelection);

        if(winner=="Player"){
            playerPoints++;
            console.log('Round '+ nGame +': Player Wins: ' +playerSelection+ ' beats '+computerSelection+' (Player : '+playerPoints+' - Computer : '+computerPoints+').');
        }else if (winner=="Computer"){
            computerPoints++;
            console.log('Round '+ nGame +': Computer Wins: ' +computerSelection+ ' beats '+playerSelection+' (Player : '+playerPoints+' - Computer : '+computerPoints+').');
        }else{
            nDraw++;
            console.log('Round '+ nGame +': No winner this time. Both players chose '+playerSelection+'. Try again. (Player : '+playerPoints+' - Computer : '+computerPoints+').');
        }
        nGame++;
    }

    if(playerPoints==5)
    {
        console.log('Player WINS after '+ --nGame+' games and '+nDraw+' draws !!!');
    }else {
        console.log('Computer WINS after '+ --nGame+' games and '+nDraw+' draws !!!');
    }

}

function checkValidity(playerSelection){

    //making the entry cas insensitive
    playerSelection=playerSelection.toLowerCase();

    if (playerSelection!="paper" && playerSelection!="rock" && playerSelection!="scissors"){
        console.log(playerSelection + " is not a valid choice... Try Again");
        return 0;
    }

    return 1;
}

//resetting the variables for a new game
function reset(){
    playerPoints=0;
    computerPoints=0;
    nDraw=0;
    nSet=1;

    pPoints.textContent=playerPoints;
    cPoints.textContent=computerPoints;
    msg.textContent="Good luck!"
}

function startGame(){

    //hiding the start button since the game has started
    start.style.cssText= 'display: none';

    //displaying the score buttons
    displayComputer.style.display= 'block';
    displayPlayer.style.display= 'block';

    //resetting the values
    reset();
}

//starting the "game" function when a click is done on the element with id=start
const start=document.querySelector('#start');
start.addEventListener('click',startGame);
