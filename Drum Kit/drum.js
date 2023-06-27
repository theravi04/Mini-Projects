//for first button method-1
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }
// method-2
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

//method-3 using loops

//DETECTING BUTTON PRESS
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  //selecting the class containing the drum to add a
  // event Listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //tells us which button got clicked
    // console.log(this.innerHTML);
    // this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

//DETECTING KEYBOARD PRESS

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
};