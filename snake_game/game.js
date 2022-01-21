import {update as updateSnake, draw as drawSnake, Snake_Speed, getHeadSnake, intersectionSnake} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameover = false;

const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameover)
        return alert('You Lose :(');

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / Snake_Speed) 
        return;
    lastRenderTime = currentTime;

    update();
    draw();
    
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkStatusDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkStatusDeath() {
    gameover = (outsideGrid(getHeadSnake()) || intersectionSnake());
}