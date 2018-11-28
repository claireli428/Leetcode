/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (!matrix.length) return 0;

  let res = 1;
  let cache = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const rows = matrix.length, cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const max = dfs(matrix, i, j, cache, dirs, rows, cols);
      res = Math.max(max, res);
    }
  }

  return res;
};

var dfs = function (matrix, row, col, cache, dirs, rows, cols) {
  if (cache[row][col] === 0) {
    let res = 1;
    for (let i = 0; i < dirs.length; i++) {
      const newRow = row + dirs[i][0], newCol = row + dirs[i][1];
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || matrix[newRow][newCol] <= matrix[row][col]) continue;
      const max = 1 + dfs(matrix, newRow, newCol, cache, dirs, rows, cols);
      res = Math.max(res, max);
    }
    cache[row][col] = res;
  }
  
  return cache[row][col];
};
