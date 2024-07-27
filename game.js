import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeInstersection } from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./gridPosition.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main (currentTime) {
  if (gameOver) {
    return alert("You Lose!");
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);


function update () {
  updateSnake()
  updateFood();
  checkDeath();
}

function draw () {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeInstersection();
}