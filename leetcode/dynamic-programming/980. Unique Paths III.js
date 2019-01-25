/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let sr = 0, sc = 0, er = 0, ec = 0, steps = 0;
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        if(grid[i][j] === 1) {
          sr = i;
          sc = j;
        }

        if(grid[i][j] === 2) {
          er = i;
          ec = j;
        }

        if(grid[i][j] !== -1) steps++;
      }
    }

    let res = [0];
    helper(grid, sr, sc, er, ec, steps, res);
    return res[0];
};

var helper = function(grid, curR, curC, targetR, targetC, steps, res) {
  if(curR < 0 || curR >= grid.length || curC < 0 || curC >= grid[0].length || grid[curR][curC] === -1) return;

  if(curR === targetR && curC === targetC) {
    if(steps === 0) res[0] += 1;
    return;
  }

  let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for(let i = 0; i < dirs.length; i++) {
    grid[curR][curC] = -1;
    let newR = curR + dirs[i][0], newC = curC + dirs[i][1];
    helper(grid, newR, newC, targetR, targetC, steps - 1, res);
    grid[curR][curC] = 0;
  }
};
