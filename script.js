

let randomDiceOne = (Math.floor((Math.random() * 6) + 1).toFixed(0));
let randomDiceTwo = (Math.floor((Math.random() * 6) + 1).toFixed(0));

document.querySelector('.img1').setAttribute("src", "images/dice" + randomDiceOne + ".png");
document.querySelector('.img2').setAttribute("src", "images/dice" + randomDiceTwo + ".png");

if (randomDiceOne > randomDiceTwo) { // If Player One Wins
    document.querySelector('h1').innerText = "Player 1 Wins!";
} else if (randomDiceTwo > randomDiceOne) { // If Player Two wins
    document.querySelector('h1').innerText = "Player 2 Wins!";
} else if (randomDiceOne === randomDiceTwo) { // If it's a Draw
    document.querySelector('h1').innerText = "Draw!";
}
