let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");  
// draw on the screen to get the context, ask canvas  to get the 2d context

// speed of the game
let speed = 7;
// movement
let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;
//game loop
function drawGame() {
    xVelocity = inputsXVelocity;
    yVelocity = inputsYVelocity;
  
    changeSnakePosition();
    let result = isGameOver();
    if (result) {
      return;
    }
  
    clearScreen();
  
    checkAppleCollision();
    drawApple();
    drawSnake();
  
    drawScore();
  
    if (score > 5) {
      speed = 9;
    }
    if (score > 10) {
      speed = 11;
    }
  
    setTimeout(drawGame, 1000 / speed);
  }

function isGameOver() {
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);  
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);  
}

function drawSnake() {
}

function changeSnakePosition() {
}

function drawApple() {
}

function checkAppleCollision() {
}

function keyDown(event) {
}

drawGame()
