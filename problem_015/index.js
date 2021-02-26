'use strict';

/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 _ _ 
|_|_|
|_|_|

How many such routes are there through a 20×20 grid?
*/

function createGrid(gridSize){
  const nodeDimentions = gridSize + 1;

  const grid = []
  for(let i = 0; i < nodeDimentions; i ++) {
    grid.push(new Array(nodeDimentions));
  }

  return grid;
}

function initializeGridBorder(grid) {
  const newGrid = deepCopy(grid);

  for(let i = 0; i < grid.length; i++){
    newGrid[i][grid.length - 1] = 1;
    newGrid[grid.length - 1][i] = 1;
  }

  return newGrid;
}

function deepCopy(objectToCopy){
  const newCopy = JSON.parse(
    JSON.stringify(objectToCopy)
  );

  return newCopy;
}

const GRID_SIZE = 20;

let grid = createGrid(GRID_SIZE);
grid = initializeGridBorder(grid);

for(let i = GRID_SIZE - 1; i >= 0; i --) {
  for(let j = GRID_SIZE - 1; j >= 0; j --) {
    grid[i][j] = grid[i+1][j] + grid[i][j+1];  
  }
}

console.log(grid[0][0]);