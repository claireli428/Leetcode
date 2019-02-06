/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 * 
 * dp[i][w] : max value achieved with i items and weight w
 * dp[i][w] = Max(dp[i - 1][w], dp[i - 1][w - A[i - 1]] + V[i - 1])
 */
//Rolling Array
const backPack = function (m, A, V) {
  let n = A.length;
  let dp = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= 0; j--) {
      if (j >= A[i - 1]) {
        dp[j] = Math.max(dp[j], dp[j - A[i - 1]] + V[i - 1]);
      }
    }
  }

  return dp[m];
};

