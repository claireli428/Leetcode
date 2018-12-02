/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let visited = new Array(M.length).fill(false);

  let count = 0;
  for(let i = 0; i < M.length; i++) {
    if(!visited[i]) {
      count++;
      dfs(M, i, visited);
    }
  }

  return count;
};

var dfs = function(M, start, visited) {
  visited[start] = true;
  for(let j = 0; j < M.length; j++) {
    if(!visited[j] && M[start][j] === 1) {
      dfs(M, j, visited);
    }
  }
};
