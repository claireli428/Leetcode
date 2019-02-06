/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (desiredTotal < maxChoosableInteger) return true;
  if (desiredTotal > (maxChoosableInteger + 1) * maxChoosableInteger / 2) return false;

  let memo = new Map();
  let visited = new Array(maxChoosableInteger + 1).fill(false);
  return helper(desiredTotal, visited, memo);
};

var helper = function (target, visited, memo) {
  if (target <= 0) return false;

  let key = convertVisited(visited);
  if (memo.has(key)) return memo.get(key);

  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      if (!helper(target - i, visited, memo)) {
        visited[i] = false;
        memo.set(key, true);
        return true;
      }
      visited[i] = false;
    }
  }

  memo.set(key, false);
  return false;
};

var convertVisited = function (visited) {
  let num = 0;
  for (let i = 1; i < visited.length; i++) {
    num |= visited[i] ? 1 : 0;
    num <<= 1;
  }
  return num;
};
