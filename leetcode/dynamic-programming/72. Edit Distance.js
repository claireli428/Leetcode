/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 
 * dp[i][j]: the min edit distance for word1.substr(0, i) and word2.substr(0, j) 
 * dp[i][j] = Min(dp[i - 1][j - 1](word1[i-1] === word2[j-1]), dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 1)
 */
var minDistance = function (word1, word2) {
  let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));
  
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[word1.length][word2.length];
};

var minDistance = function (word1, word2) {
  if (!word1.length) return word2.length;
  if (!word2.length) return word1.length;

  let min = Number.MAX_SAFE_INTEGER;
  let c1 = word1[word1.length - 1], c2 = word2[word2.length - 1];
  if (c1 === c2) {
    let dis = minDistance(word1.substring(0, word1.length - 1), word2.substring(0, word2.length - 1));
    min = Math.min(min, dis);
  } else {
    let disI = minDistance(word1, word2.substring(0, word2.length - 1)) + 1;
    let disD = minDistance(word1.substring(0, word1.length - 1), word2) + 1;
    let disR = minDistance(word1.substring(0, word1.length - 1), word2.substring(0, word2.length - 1)) + 1;
    min = Math.min(min, disI, disD, disR);
  }

  return min;
};
