import { getInputDirection } from "./input.js";

export const Snake_Speed = 5;
const snakeBody = [{x: 11, y: 11}
                ];
let newSegment = 0;
let newScoreGame = 0;
let oldScoreGame = 0;


export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = segment.y;
        snakeElem.style.gridColumnStart = segment.x;
        snakeElem.classList.add('snake');
        gameBoard.appendChild(snakeElem);
        if ((newScoreGame + oldScoreGame) != oldScoreGame)
        {
            console.log(oldScoreGame);
            oldScoreGame += newScoreGame;
            newScoreGame = 0;
            console.log(oldScoreGame);
            document.getElementById('score-game').innerHTML = oldScoreGame; 
        }
    })
}


export function growSnake(amount) {
    newSegment += amount;
    newScoreGame = newSegment * 5;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
export function onSnake(position, {ignoreHead = false} = {} ) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
    }
    newSegment = 0;
}

export function intersectionSnake() {
    return onSnake(snakeBody[0], {ignoreHead: true});
}

export function getHeadSnake() {
    return snakeBody[0];
}