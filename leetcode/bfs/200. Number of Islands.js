/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) return 0;

  let count = 0, rows = grid.length, cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(grid, i, j, rows, cols);
      }
    }
  }

  return count;
};

var bfs = function (grid, i, j, rows, cols) {
  let queue = [[i, j]];
  while (queue.length) {
    let head = queue.shift();
    let row = head[0], col = head[1];
    if (row > 0 && grid[row - 1][col] === "1") {
      queue.push([row - 1, col]);
      grid[row - 1][col] = "0";
    }
    if (row < rows - 1 && grid[row + 1][col] === "1") {
      queue.push([row + 1, col]);
      grid[row + 1][col] = "0";
    }
    if (col > 0 && grid[row][col - 1] === "1") {
      queue.push([row, col - 1]);
      grid[row][col - 1] = "0";
    }
    if (col < cols - 1 && grid[row][col + 1] === "1") {
      queue.push([row, col + 1]);
      grid[row][col + 1] = "0";
    }
  }
};
