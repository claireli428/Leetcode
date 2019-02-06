
/**
 * Given n items with size A[i] and value V[i]
 * and a backpack with size m. 
 * What's the maximum value can you put into the backpack?
 * Example
 * Given 4 items with size [2, 3, 5, 7] and value [1, 5, 2, 4],
 * and a backpack with size 10. The maximum value is 9
 */
const backPackII = function (m, A, V) {
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

