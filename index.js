var randomDiceNumber1 = Math.round((Math.random() * 5)) + 1;
var randomDiceNumber2 = Math.round((Math.random() * 5)) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomDiceNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomDiceNumber2 + ".png");

if(randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else if(randomDiceNumber1 < randomDiceNumber2){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "🚩 DRAW! 🚩";
}