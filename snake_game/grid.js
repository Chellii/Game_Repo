const Grid_Size = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * Grid_Size + 1),
        y: Math.floor(Math.random() * Grid_Size + 1)
    }
}

export function outsideGrid(position) {
    if (position.x < 1 || position.x > Grid_Size || 
        position.y < 1 || position.y > Grid_Size)
        return true;
    return false;
}