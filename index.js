function isGameOver() {
    let gameOver = false;
  
    if (yVelocity === 0 && xVelocity === 0) {
      return false;
    }
  
    //walls
    if (headX < 0) {
      gameOver = true;
    } else if (headX === tileCount) {
      gameOver = true;
    } else if (headY < 0) {
      gameOver = true;
    } else if (headY === tileCount) {
      gameOver = true;
    }
  
    for (let i = 0; i < snakeParts.length; i++) {
      let part = snakeParts[i];
      if (part.x === headX && part.y === headY) {
        gameOver = true;
        break;
      }
    }
  
    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "50px Verdana";
  
      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";
  
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", " magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx.fillStyle = gradient;
  
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
      }
  
      ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }
  
    return gameOver;
  
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
