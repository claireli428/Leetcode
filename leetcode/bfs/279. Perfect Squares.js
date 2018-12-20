/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let memo = new Map();
  return helper(n, memo);
};

var helper = function (n, memo) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo.has(n)) return memo.get(n);

  let root = Math.floor(Math.sqrt(n));
  let min = Number.MAX_SAFE_INTEGER;
  while (root) {
    min = Math.min(min, 1 + helper(n - root * root, memo));
    root--;
  }

  memo.set(n, min);
  return min;
};

//BFS
var numSquares = function (n) {
  if (n <= 3) return n;

  let queue = [n], level = 0;
  let visited = new Set();
  visited.add(n);

  while (queue.length) {
    let len = queue.length;
    while (len) {
      let head = queue.shift();
      let root = Math.floor(Math.sqrt(head));
      while (root) {
        let num = head - root * root;
        if (num === 0) return level + 1;
        if (!visited.has(num)) {
          queue.push(num);
          visited.add(num);
        }
        root--;
      }

      len--;
    }
    level++;
  }

  return 0;
};
