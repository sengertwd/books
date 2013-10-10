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

  drawScreen();
  
  Debugger.log("Drawing Canvas!");

  function drawScreen (){
    // Creates Box inside the Canvas
    context.fillStyle = '#aaffaa';
    context.fillRect(0,0,500,300);

    // Creates Text inside the Canvas
    context.fillStyle = '#000000';
    context.font = '25px _sans';
    context.textBaseline = 'top';
    context.fillText('Hello You!', 185, 50);

    // Creates Image inside the Canvas
    var poliwhirl = new Image();
        poliwhirl.src = 'img/polywirl.png'; // http://www.psypokes.com/dex/picdex/minis/060.png
        poliwhirl.onload = function (){
          context.drawImage(poliwhirl, 250-16, 70);
        };

    context.strokeStyle = '#555555';
    context.strokeRect(5,5,490,290);
  }
}