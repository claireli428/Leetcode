/**
 * Given n items with size A[i] and value V[i]
 * ( each item has an infinite number available)
 * and a backpack with size m. 
 * What's the maximum value can you put into the backpack?
 * Example
 * Given 4 items with size [2, 3, 5, 7] and value [1, 5, 2, 4],
 * and a backpack with size 10. The maximum value is 15
 */
var backPackIII = function (m, A, V) {
  let dp = new Array(m + 1).fill(0);

  for (let j = 0; j <= m; j++) {
    for (let i = 0; i < A.length; i++) {
      if(A[i] <= j) {
        dp[j] = Math.max(dp[j], dp[j-A[i]] + V[i]); 
      }
    }
  }

  return dp[m];
};
