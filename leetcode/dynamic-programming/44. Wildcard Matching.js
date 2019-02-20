/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * dp[i][j]: is first i characters in s matching first j characters in p
 */
var isMatch = function (s, p) {
  let dp = new Array(s.length + 1).fill(false).map(() => new Array(p.length + 1).fill(false));

  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) {
    dp[0][j] = p[j - 1] === '*' ? dp[0][j - 1] : false;
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        //'*' match zero character or match multiple characters
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[s.length][p.length];
};
