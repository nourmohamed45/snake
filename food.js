import { randomGridPosition } from "./gridPosition.js";
import { onSnake, expandSnake } from "./snake.js";

let food = getRandomFoodPosition();


const EXPANSION_RATE = 1;

export function update() {
  if(onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBody) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  gameBody.appendChild(foodElement);
}


function getRandomFoodPosition() {
  let newFoodPosition ;

  while(newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}