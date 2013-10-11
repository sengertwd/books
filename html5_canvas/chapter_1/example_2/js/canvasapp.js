window.addEventListener('load', windowLoaded, false);

var Debugger = function (){};

Debugger.log = function (message){
  try {
    console.log(message);
  } catch (exception) {
    return;
  }
}

function windowLoaded (){
  canvasapp();
}

function canvasSupport(canvas){
  if(!canvas || !canvas.getContext){
    return;
  }
}

function canvasapp (){
  var canvas = document.getElementById('canvasOne');
  canvasSupport(canvas);
  var context = canvas.getContext('2d');

  // Begin -> Game Variables

  var guesses = 0,
      message = "Guess the Letter from 'a' (lower) to 'z' (hight)",
      letters = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
      ],
      today = new Date(),
      letterToGuess = "",
      higherOrLower = "",
      lettersGuessed,
      gameOver = false;

      initGame();

  // End   -> Game Variables  
  drawScreen();

  function initGame(){
    var letterIndex = Math.floor(Math.random()*letters.length);
    letterToGuess = letters[letterIndex];
    guesses = 0;
    lettersGuessed = [];
    gameOver = false;
    window.addEventListener("keyup", eventKeyPressed, true);
  }

  function eventKeyPressed(e) {
    if (gameOver == false){
      var letterPressed = String.fromCharCode(e.keyCode);
          letterPressed = letterPressed.toLowerCase();
  
      guesses++;
      lettersGuessed.push(letterPressed);
      if(letterPressed == letterToGuess){
        gameOver = true;
      } else {
        letterIndex = letters.indexOf(letterToGuess);
        guessIndex = letters.indexOf(letterPressed)
      }
  
      if(guessIndex < 0){
        higherOrLower = "That is not a letter";
      } else if(guessIndex > letterIndex){
        higherOrLower = "Lower";
      } else {
        higherOrLower = "Higher";
      }
  
      drawScreen();
    }
  }

  function drawScreen (){
    Debugger.log("Drawing Canvas!");

    dateFormated = (today.getMonth() + 1) + "/" + (today.getDate()) + "/" + today.getFullYear();

    // Background 
    context.fillStyle = "#aaffaa";
    context.fillRect(0,0,500,300);
    // Box
    context.strokeStyle = "rgba(0,0,0,.7)";
    context.strokeRect(5,5,490,290);
    context.textBaseline = "top";
    // Date
    context.fillStyle = "#000000";
    context.font = "10px sans";
    context.fillText(dateFormated, 125, 10);
    // Message
    context.fillStyle = "#F00";
    context.font = "14px sans";
    context.fillText(message, 125, 30);
    // Guesses 
    context.fillStyle = "#AAAAFF";
    context.font = "16px sans";
    context.fillText("Guesses: " + guesses, 215, 50);
    // Higher or Lower
    context.fillStyle = "#555";
    context.font = "16px sans";
    context.fillText("Higher or Lower: " + higherOrLower, 150, 125);
    // Letters guessed
    context.fillStyle = "#555";
    context.font = "16px sans";
    context.fillText("Letters Guessed: " + lettersGuessed.toString(), 10, 260 );
    // Game Over
    if(gameOver){
      context.fillStyle = "#FFFF00";
      context.font = "40px sans";
      context.fillText("You Got It!", 150, 180)
      var button = document.createElement("button");
          button.id = "createImg";
          button.innerHTML = "Create an Image";
      document.body.appendChild(button);
      document.getElementById('createImg').addEventListener("click", function(){
        window.open(canvas.toDataURL(),"canvasImage", "left=0,top=0,width="+canvas.width+",height="+canvas.height+",toolbar=0,resizable=0");
      }, false);
    }
  }
}