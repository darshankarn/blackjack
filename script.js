let cards=[];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message="";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let player ={
     name: "Darshan" ,
     chips: 145
};
let playerEl = document.getElementById("player-el");
playerEl.textContent= player.name+": $"+player.chips;
function getRamdomCard(){
    let cardNumber= Math.floor(Math.random()*13)+1
    if(cardNumber===1){
        return 11;
    } else if(cardNumber>10){
        return 10;
    }else{
        return cardNumber;
    }
}

function startGame(){
    let fristCard = getRamdomCard();
let secondCard = getRamdomCard();
cards=[fristCard,secondCard];
sum = cards[0] + cards[1];
    renderGame();
}
function renderGame(){
if(sum<21){
    message ="Do you want to draw a new card?";
} else if(sum===21){
    hasBlackJack=true;
    message="You'have got Blackjack";
}else{
    isAlive= false;
    message="You're out of the game!";
}
 messageEl.innerText= message;
 sumEl.textContent="Sum: " + sum ;
 for(let i=0;i<cards.length;i++){
     cardEl.textContent+=cards[i]+" " ;
 }

 console.log(message);
}
function newcard(){
    if(isAlive===true && hasBlackJack===false){
 let thirdCard = getRamdomCard();
 cards.push(thirdCard);
 sum+=cards[cards.length-1];
 renderGame();
 cardEl.textContent="Cards: ";
 for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" " ;
}
}
}