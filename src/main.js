/**
 * @description Program that recursively, resolves a given sudoku.
 * @param {Array[Array[Number]]} Sudoku
 */


let sudokuArray = [[0,0,0,0,0,2,4,8,0],
                  [0,8,0,5,0,7,0,0,0],
                  [6,0,0,0,0,0,0,0,3],
                  [4,6,8,0,0,1,0,0,0],
                  [7,0,5,0,0,0,0,0,4],
                  [0,9,0,0,0,0,0,2,7],
                  [5,3,0,2,0,6,0,0,8],
                  [0,0,2,0,5,0,0,0,0],
                  [8,0,6,3,4,0,5,0,2]];

const NUMBEROFCOLUMNS = 9;
const NUMBEROFROWS = 9;
let firstTime = true;
         
/**
 * 
 * @param {Number} posY 
 * @param {Number} posX 
 * @param {Number} number
 * @description Function that return true in case that a number can be inserted in a position of the array. 
 */
function checkNumberInPos(posY, posX, number) {
  for (let i = 0; i < NUMBEROFROWS; i++)
    if (sudokuArray[posY][i] === number)
      return false;
  for (let i = 0; i < NUMBEROFCOLUMNS; i++)
    if (sudokuArray[i][posX] === number)
      return false;
  let auxPosX = Math.floor(posX / 3) * 3;
  let auxPosY = Math.floor(posY / 3) * 3;
  for (let i = 0; i < 3; i++) 
    for (let j = 0; j < 3; j++)
      if (sudokuArray[auxPosY + i][auxPosX + j] === number)
        return false; 
  return true;
}

/**
 * @description main function called recursively to solve the problem
 */
function main() {
  for (let j = 0; j < NUMBEROFROWS; j++) {
    for (let i = 0; i < NUMBEROFCOLUMNS; i++) {
      if (sudokuArray[j][i] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (checkNumberInPos(j, i, num)) {
            sudokuArray[j][i] = num;
            main();
            sudokuArray[j][i] = 0;
          }
        }
        return;
      }
    }
  }
  console.log(sudokuArray);
}

// TODO: Handle this cause is not working at all
if (firstTime) {
  firstTime = false;
  main();
}