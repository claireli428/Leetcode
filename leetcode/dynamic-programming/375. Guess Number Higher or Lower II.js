/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  let memo = new Array(n+1).fill(null).map(() => new Array(n+1).fill(0));
  return getMoneyAmountHelper(1, n, memo);
};

var getMoneyAmountHelper = function (start, end, memo) {
  if (start >= end) return 0;

  if(memo[start][end]) return memo[start][end];

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = start; i <= end; i++) {
    let max = Math.max(getMoneyAmountHelper(start, i - 1, memo), getMoneyAmountHelper(i + 1, end, memo));
    min = Math.min(min, i + max);
  }

  memo[start][end] = min;
  return min;
};

//DP
var getMoneyAmount = function (n) {
  let dp = new Array(n+1).fill(null).map(() => new Array(n+1).fill(0));
  for (let i = n; i > 0 ; i--) {
    for(let j = i + 1; j <= n; j++) {
      let min = Number.MAX_SAFE_INTEGER;
      for(let k = i; k <= j; k++) {
        let left = i < k - 1 ? dp[i][k-1] : 0;
        let right = j > k + 1 ? dp[k+1][j] : 0;
        let max = Math.max(left, right);
        min = Math.min(min, k + max);
      }
      dp[i][j] = min;
    }
  }

  return dp[1][n];
};
