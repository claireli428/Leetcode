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
  for (let j = 2; j <= p.length; j++) {
    dp[0][j] = p[j - 1] === '*' ? dp[0][j - 1] || dp[0][j - 2] : false;
  }

  if (s.length > 0) dp[1][1] = s[0] === p[0] || p[0] === '.';

  for (let i = 1; i <= s.length; i++) {
    for (let j = 2; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        //'*' match one preceding character or zero preceding character or multiple preceding characters
        dp[i][j] = dp[i][j - 1] || dp[i][j - 2] || (dp[i - 1][j] && (p[j - 2] === s[i - 1] || p[j - 2] === '.'));
      }
    }
  }

  return dp[s.length][p.length];
};
