
var dice_number1 = Math.floor(Math.random() * 6) + 1;
var dice_number2 = Math.floor(Math.random() * 6) + 1;
var string_for_dice1 = "images/dice"+dice_number1+".png";
var string_for_dice2 = "images/dice"+dice_number2+".png";

document.querySelectorAll("img")[0].setAttribute("src", string_for_dice1);
document.querySelectorAll("img")[1].setAttribute("src", string_for_dice2);
if(dice_number1>dice_number2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if(dice_number1<dice_number2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
else {
  document.querySelector("h1").innerHTML = "It's a DRAW!";
}
