/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length, n = obstacleGrid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      
      if (i > 0 || j > 0) {
        let top = i > 0 && obstacleGrid[i - 1][j] === 0 ? dp[i - 1][j] : 0;
        let left = j > 0 && obstacleGrid[i][j - 1] === 0 ? dp[i][j - 1] : 0;
        dp[i][j] = top + left;
      }
    }
  }

  return dp[m - 1][n - 1];
};
