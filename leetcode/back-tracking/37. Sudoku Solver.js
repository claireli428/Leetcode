/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    helper(board, 0, 0);
};

var helper = function(board, row, col) {
  if(row >= 9) return true;
  if(col >= 9) return helper(board, row + 1, 0);
  if(board[row][col] !== '.') return helper(board, row, col + 1);

  for(let i = 1; i <= 9; i++) {
    let n = i + '';
    if(validRow(board, n, row) && validCol(board, n, col) && validMatrix(board, n, row, col)) {
      board[row][col] = n;
      if(helper(board, row, col + 1)) return true;
      board[row][col] = '.';
    }
  }

  return false;
};

var validRow = function(board, n, row) {
  for(let i = 0; i < 9; i++) {
    if(board[row][i] === n) return false;
  }
  return true;
};

var validCol = function(board, n, col) {
  for(let i = 0; i < 9; i++) {
    if(board[i][col] === n) return false;
  }
  return true;
};

var validMatrix = function(board, n, row, col) {
  let startR = Math.floor(row / 3) * 3, startC = Math.floor(col / 3) * 3;
  for(let r = startR; r < startR + 3; r++) {
    for(let c = startC; c < startC + 3; c++) {
      if(board[r][c] === n) return false;
    }
  }
  return true;
};
