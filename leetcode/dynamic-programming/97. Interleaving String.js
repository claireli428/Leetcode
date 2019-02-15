/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * dp[i][j] = true: s3(first i + j chars) is interleaving of s1(first i chars) and s2(first j chars)
 * dp[i][j] = (dp[i-1][j] && s3[i+j-1] === s1[i-1]) || (dp[i][j-1] && s3[i+j-1] === s2[j-1])
 */
var isInterleave = function (s1, s2, s3) {
  if (!s1 || !s1.length) return s2 === s3;
  if (!s2 || !s2.length) return s1 === s3;
  if (s3.length !== s1.length + s2.length) return false;

  let dp = new Array(s1.length + 1).fill(false).map(() => new Array(s2.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = s1.substr(0, i) === s3.substr(0, i);
  }

  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = s2.substr(0, j) === s3.substr(0, j);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] = (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) || (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1])
    }
  }

  return dp[s1.length][s2.length];
};

//Recursive
var isInterleave = function (s1, s2, s3) {
  if (!s1 || !s1.length) return s2 === s3;
  if (!s2 || !s2.length) return s1 === s3;
  if (s3.length !== s1.length + s2.length) return false;

  let lastChar1 = s1[s1.length - 1];
  let lastChar2 = s2[s2.length - 1];
  let lastChar3 = s3[s3.length - 1];

  if (lastChar3 !== lastChar1 && lastChar3 !== lastChar2) return false;

  let res1 = isInterleave(s1.substring(0, s1.length - 1), s2, s3.substring(0, s3.length - 1));
  let res2 = isInterleave(s1, s2.substring(0, s2.length - 1), s3.substring(0, s3.length - 1));
  if (lastChar3 !== lastChar2) return res1;
  if (lastChar3 !== lastChar1) return res2
  return res1 || res2;
};
