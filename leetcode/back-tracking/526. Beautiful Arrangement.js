/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    let res = [], visited = new Set();
    helper(N, [], res, visited);
    return res.length;
};

var helper= function(n, path, res, visited) {
  if(path.length === n) {
    res.push(path.slice(0));
    return;
  }

  for(let i = 1; i <= n; i++) {
    let len = path.length + 1;
    if(!visited.has(i) && (i % len === 0 || len % i === 0)) {
      path.push(i);
      visited.add(i);
      helper(n, path, res, visited);
      path.pop();
      visited.delete(i);
    }
  }
}
