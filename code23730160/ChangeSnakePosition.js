function changeSnakePosition() {
  if (headX === appleX && headY === appleY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
}
}