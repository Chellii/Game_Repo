import { onSnake, growSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition();
const Growth_Snake = 1;

export function update() {
    if (onSnake(food)) {
        growSnake(Growth_Snake);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElem = document.createElement('div');
    foodElem.style.gridRowStart = food.y;
    foodElem.style.gridColumnStart = food.x;
    foodElem.classList.add('food');
    gameBoard.appendChild(foodElem);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition))
        newFoodPosition = randomGridPosition();
    return newFoodPosition;
}