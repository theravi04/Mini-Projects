//1-6 numbers
var randomNumber1 = Math.floor(Math.random()*6)+1;

//dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

//Images/dice1.png - Images/dice6.png
var randomImageSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "Player-1 Won!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").innerHTML = "Player-2 Won!";
}
else{
    document.querySelector("h2").innerHTML = "It's a Tie";
}