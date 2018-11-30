/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

//BFS
var updateMatrix = function (matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const maxDist = rows + cols;
  let dist = new Array(rows).fill(null).map(() => new Array(cols).fill(maxDist));
  let queue = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        queue.push({ row: i, col: j });
        dist[i][j] = 0;
      }
    }
  }

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  while (queue.length) {
    let { row, col } = queue.shift();
    for (let i = 0; i < dirs.length; i++) {
      let newRow = row + dirs[i][0], newCol = col + dirs[i][1];
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) continue;

      if (dist[newRow][newCol] > dist[row][col] + 1) {
        dist[newRow][newCol] = dist[row][col] + 1;
        queue.push({ row: newRow, col: newCol });
      }
    }
  }

  return dist;
};

//DFS
var updateMatrix = function (matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const maxDist = rows + cols;
  let dist = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== 0) {
        dist[i][j] = hasNeighborZero(i, j, matrix, rows, cols) ? 1 : maxDist;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dist[i][j] === 1) {
        dfs(dist, i, j, -1);
      }
    }
  }

  return dist;
};

var dfs = function (dist, row, col, step) {
  if (row < 0 || row >= dist.length || col < 0 || col >= dist[0].length || dist[row][col] <= step) return;

  if (step > 0) dist[row][col] = step;

  dfs(dist, row + 1, col, dist[row][col] + 1);
  dfs(dist, row - 1, col, dist[row][col] + 1);
  dfs(dist, row, col + 1, dist[row][col] + 1);
  dfs(dist, row, col - 1, dist[row][col] + 1);
};

var hasNeighborZero = function (row, col, matrix, rows, cols) {
  if (row < rows - 1 && matrix[row + 1][col] === 0) return true;
  if (row > 0 && matrix[row - 1][col] === 0) return true;
  if (col > 0 && matrix[row][col - 1] === 0) return true;
  if (col < cols - 1 && matrix[row][col + 1] === 0) return true;

  return false;
};
