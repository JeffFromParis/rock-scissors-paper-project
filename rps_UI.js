let playerPoints=0;
let computerPoints=0;
let nSet=1;
let playerSelection ="";
let computerSelection ="";

const displayPlayer= document.querySelector("#playerScore");
const displayComputer= document.querySelector("#computerScore");
const msg = document.querySelector('#message');
const pPoints = document.querySelector('#pPoints');
const cPoints = document.querySelector('#cPoints');



// That function will randomly return Rock, Paper or Scissor
function computerPlay()
{
    let answerNum = randomNumber(3);
    if(answerNum==0) return "rock";
    if(answerNum==1) return "paper";
    else return "scissors";
}

//Random integer number between 1 and the number
function randomNumber(number){
    return Math.floor(Math.random()*number);
}

function playRound(playerSelection,computerSelection){

    let winner = {};
    winner.name="";
    winner.points=0;

    if(playerSelection==computerSelection){
        winner.name="none";
        nDraw+=1;
        winner.points=nDraw;
        return winner;
    }

    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                winner.name = "computer";
                computerPoints+=1;
                winner.points = computerPoints;
            }else{
                winner.name = "player";
                playerPoints+=1;
                winner.points = playerPoints;
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                winner.name = "computer";
                computerPoints+=1;
                winner.points = computerPoints;
            }else{
                winner.name = "player";
                playerPoints+=1;
                winner.points = playerPoints;
            }
            break;
        case"scissors":
            if(computerSelection == "rock"){
                winner.name = "computer";
                computerPoints+=1;
                winner.points = computerPoints;
            }else{
                winner.name = "player";
                playerPoints+=1;
                winner.points = playerPoints;
            }
            break;
            default: return "ERROR";
    }

    return winner;
}

function displayScore(name){
    if (name=="computer"){
        cPoints.textContent = computerPoints;
    }

    if (name=="player"){
        pPoints.textContent = playerPoints;
    }
}

function endOfGame(winner){

    if(winner=="computer"){
        msg.textContent="I WIN !!! Another game ?";
    }else{
        msg.textContent="I don't understand how it is possible but it seems that you won... Another game ?";
    }
    //diplsaying the start button again
    start.style.cssText= 'display: inline-block';
    displayComputer.style.display= "none";
    displayPlayer.style.display= 'none';
}

//When the user clicks on 1 of the buttons
function choiceDone(){
    console.log("Round #" + nSet + " has been played");

    if(playerPoints==5){
        msg.textContent="You already won, stop clicking on the button. Start another game!";
        return;
    }

    if(computerPoints==5){
        msg.textContent="Too late, you lost the game. Stop clicking on the buttons. Start another game.";
        return;
    }

    //Getting the player seletion from the id of the button
    playerSelection = this.getAttribute("id");
    computerSelection = computerPlay();

    winner=playRound(playerSelection,computerSelection);
    console.log("Winner is "+ winner.name);
    console.log(winner.name + " has "+ winner.points + " points");

    displayScore(winner.name);

    if(computerPoints==5 || playerPoints == 5){
        endOfGame();
    }

    switch(winner.name){
        case("computer"):
            string="I win round #"+nSet+" ("+computerSelection+" beats "+playerSelection+")";
        break;
        case("player"):
            string="You win round #"+nSet+" ("+playerSelection+" beats "+computerSelection+")";
        break;
            case("none"):
            string="Round #"+nSet+" : is a draw! We both chose " + playerSelection;
        break;
        default: return "ERROR";
    }

    msg.textContent= string;
    nSet+=1;
}

//Make the button a little larger
function enlargeButton(){
    this.classList.add('selection');
}

function downsizeButton(){
    this.classList.remove('selection');
}

//resetting the variables for a new game
function reset(){
    playerPoints=0;
    computerPoints=0;
    nDraw=0;
    nSet=1;

    pPoints.textContent=playerPoints;
    cPoints.textContent=computerPoints;
    msg.textContent="Good luck!";
}

function startGame(){

    //hiding the start button since the game has started
    start.style.cssText= 'display: none';

    //displaying the score buttons
    displayComputer.style.display= 'inline-block';
    displayPlayer.style.display= 'inline-block';

    //resetting the values
    reset();

    //Selecting all the buttons
    const buttons= document.querySelectorAll("#choices div button");

    console.log(buttons);

    //adding listeners to those buttons
    buttons.forEach(item => {
        item.addEventListener('mouseover',enlargeButton);
        item.addEventListener('click',choiceDone);
        item.addEventListener('mouseleave',downsizeButton);
    });
}

//starting the "game" function when a click is done on the element with id=start
const start=document.querySelector('#start');
start.addEventListener('click',startGame);
