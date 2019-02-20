/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * dp[i][j]: distinct subsequence number of first i chars in s and first j chars in t
 * dp[i][j] = dp[i-1][j] + (dp[i-1][j-1], if s[i-1] === t[j-1])
 */
var numDistinct = function (s, t) {
  if (!s.length || s.length < t.length) return 0;
  if (!t.length || s === t) return 1;

  let dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0));

  for (let i = 0; i <= s.length; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      dp[i][j] = dp[i - 1][j];
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }

  return dp[s.length][t.length];
};

var numDistinct = function (s, t) {
  if (!s.length || s.length < t.length) return 0;
  if (!t.length || s === t) return 1;

  let sc = s[s.length - 1], tc = t[t.length - 1];

  let res = numDistinct(s.substring(0, s.length - 1), t);
  if (sc === tc) {
    res += numDistinct(s.substring(0, s.length - 1), t.substring(0, t.length - 1));
  }

  return res;
};
