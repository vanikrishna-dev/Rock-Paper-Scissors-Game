let randomChoice;
let computerChoiceText;
function assignRandomChoice(){
    randomChoice = Math.floor(Math.random() * 3 + 1);
}

function computerChoice(){
    if (randomChoice===1) {
            computerChoiceText=`👊🏻 Rock`;
        } else if (randomChoice===2) {
            computerChoiceText=`✋🏻 Paper`;
        } else {
            computerChoiceText=`✌🏻 Scissors`;
        }
}

function rockClicked(){
        assignRandomChoice();
        computerChoice()

        let result;
        if(computerChoiceText===`👊🏻 Rock`){
            result='Tie'; 
        } else if(computerChoiceText===`✋🏻 Paper`){
            result='Computer Won';
        }else{
            result='You Won';
        }

        document.querySelector('#choice').innerHTML=
        `You chose 👊🏻 Rock <br> 
        Computer chose ${computerChoiceText}.<br>
        And the result is: ${result}!`;
}

function paperClicked(){
        assignRandomChoice();
        computerChoice()

        let result;
        if(computerChoiceText===`👊🏻 Rock`){
            result='You Won';
        } else if(computerChoiceText===`✋🏻 Paper`){
            result='Tie';
        }else{
            result='Computer Won';
        }
    
        document.querySelector('#choice').innerHTML=
        `You chose ✋🏻 Paper <br> 
        Computer chose ${computerChoiceText}. <br>
        And the result is: ${result}!`;
}

function scissorsClicked(){
        assignRandomChoice();
        computerChoice()

        let result;
        if(computerChoiceText===`👊🏻 Rock`){
            result='Computer Won';
        } else if(computerChoiceText===`✋🏻 Paper`){
            result='You Won';
        }else{
            result='Tie';
        }

        document.querySelector('#choice').innerHTML=
        `You chose ✌🏻 Scissors <br> 
        Computer chose ${computerChoiceText}.<br>
        And the result is: ${result}!`;
}