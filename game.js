let score = {
    computer: 0,
    user: 0,
    tie: 0,
    updateScore: function(){
        this.saveScore();
            document.querySelector("#score").innerHTML = 
        `Score ---> Computer Won: ${this.computer}, 
        User Won: ${this.user},
        Tie: ${this.tie}`;
    },
    saveScore: function(){
        let scoreStr = JSON.stringify(this);
        localStorage.setItem(`score`, scoreStr);
        console.log("Score saved: ${scoreStr}");
    }
}; 

function resetScore(){
    console.log('Resetting Score');
    score.computer = 0;
    score.user = 0;
    score.tie = 0 ;
    score.updateScore(); 
}

function init(){
    let scoreStr = localStorage.getItem(`score`);
    if(scoreStr){
        console.log("Score found : ${scoreStr}");
        let scoreVal = JSON.parse(scoreStr);
        score.computer = scoreVal.computer;
        score.user = scoreVal.user;
        score.tie = scoreVal.tie ;
        score.updateScore(); 
    }
}

function getRandomChoice(){
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    return randomChoice;
} 

function computerChoice(){
    let randomChoice = getRandomChoice();
    let computerChoiceText;
    if (randomChoice===1) {
            computerChoiceText=`👊🏻 Rock`;
        } else if (randomChoice===2) {
            computerChoiceText=`✋🏻 Paper`;
        } else {
            computerChoiceText=`✌🏻 Scissors`;
        }
    return computerChoiceText;
}

function showResult(userChoice, computerChoice, result){
    document.querySelector('#choice').innerHTML=
    `You chose: ${userChoice} <br> 
    Computer chose: ${computerChoice}<br><br>
    Result: ${result}!`;
}

function getResult(userChoice, computerChoiceText ){
    let result = 'Unknown';
    if(computerChoiceText===userChoice){
        result='Tie'; 
        score.tie++;
    } else if((computerChoiceText===`✋🏻 Paper` && userChoice === '👊🏻 Rock') ||
              (computerChoiceText==='👊🏻 Rock' && userChoice === '✌🏻 Scissors')||
              (computerChoiceText==='✌🏻 Scissors' && userChoice === `✋🏻 Paper`) ){
        result='Computer Won'; 
        score.computer++;
    }else{
        result='You Won';
        score.user++;
    }
    score.updateScore();
    return result;
}

function rockClicked(){
    let userChoice = '👊🏻 Rock'
    let computerChoiceText=computerChoice();
    let result = getResult(userChoice, computerChoiceText);
    showResult(userChoice, computerChoiceText, result);

}

function paperClicked(){
    let userChoice = '✋🏻 Paper'
    let computerChoiceText=computerChoice();
    let result = getResult(userChoice, computerChoiceText);
    showResult(userChoice, computerChoiceText, result);
}

function scissorsClicked(){ 
    let userChoice = '✌🏻 Scissors'
    let computerChoiceText=computerChoice();
    let result = getResult(userChoice, computerChoiceText);
    showResult(userChoice, computerChoiceText, result);
}

init();