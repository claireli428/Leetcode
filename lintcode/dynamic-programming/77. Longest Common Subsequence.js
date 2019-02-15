/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 * 
 */

var longestCommonSubsequence = function (A, B) {
  if (!A.length || !B.length) return 0;

  let dp = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(0));
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
  }

  return dp[A.length][B.length];
};

var longestCommonSubsequence = function (A, B) {
  if (!A.length || !B.length) return 0;

  let c1 = A[0], c2 = B[0];
  if (c1 === c2) return 1 + longestCommonSubsequence(A.substring(1), B.substring(1));

  let len1 = longestCommonSubsequence(A.substring(1), B);
  let len2 = longestCommonSubsequence(A, B.substring(1));

  return Math.max(len1, len2);
};
