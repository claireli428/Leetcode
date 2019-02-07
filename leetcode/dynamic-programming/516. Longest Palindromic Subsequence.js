/**
 * @param {string} s
 * @return {number}
 * 
 * dp[i][j]: longest palindrome string's length of substring 
 * start from ith char and end to jth char
 * dp[i][j] = dp[i + 1][j - 1] + 2 || dp[i + 1][j - 1]
 */
var longestPalindromeSubseq = function (s) {
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (j - i <= 2 && s[i] === s[j]) {
        dp[i][j] = j - i + 1;
      } else {
        dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] + 2
          : Math.max(dp[i + 1][j - 1], dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};
