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

  let score = 0;

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
  ctx.fillStyle = "green";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY)); //put an item at the end of the list next to the head
  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // remove the furthet item from the snake parts if have more than our tail size.
  }

  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);  
}

function changeSnakePosition() {
  if (headX === appleX && headY === appleY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
}
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
  if (headX === appleX && headY === appleY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    }
}

function keyDown(event) {
  
  if (event.keyCode == 38 && yVelocity != 1) {
    inputsYVelocity = -1;
    inputsXVelocity = 0;
    }

if (event.keyCode == 40 && yVelocity != -1) {
    inputsYVelocity = 1;
    inputsXVelocity = 0;
    }

if (event.keyCode == 37 && xVelocity != 1) {
    inputsXVelocity = -1;
    inputsYVelocity = 0;
    }

if (event.keyCode == 39 && xVelocity != -1) {
    inputsXVelocity = 1;
    inputsYVelocity = 0;
    }
}

drawGame()
