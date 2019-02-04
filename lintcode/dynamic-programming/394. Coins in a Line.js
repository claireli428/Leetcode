/**
 * @param n: An integer
 * @return: A boolean which equals to true if the first player will win
 * 
 * Def: dp[i] = true - Win with i remaining 
 * dp[i] = !dp[i-1] || !dp[i-2] 
 */
const firstWillWin = function (n) {
  let dp = new Array(n + 1).fill(false);
  dp[1] = true;
  dp[2] = true;

  for (let i = 3; i <= n; i++) {
    dp[i] = !dp[i - 1] || !dp[i - 2];
  }

  return dp[n];
}
