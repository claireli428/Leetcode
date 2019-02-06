/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 * 
 * dp[i][w] = true : with i items, can fill weight w
 * dp[i][w] = dp[i - 1][w] || dp[i - 1][w - A[i - 1]]
 */
const backPack = function (m, A) {
  let n = A.length;
  let dp = new Array(n + 1).fill(false).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= A[i - 1]) {
        dp[i][j] |= dp[i - 1][j - A[i - 1]];
      }
    }
  }

  let res = 0;
  for (let j = m; j >= 0; j--) {
    if (dp[n][j]) {
      res = j;
      break;
    }
  }

  return res;
};

//Rolling Array
const backPack = function (m, A) {
  let n = A.length;
  let dp = new Array(m + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= 0; j--) {
      if (j >= A[i - 1]) {
        dp[j] |= dp[j - A[i - 1]];
      }
    }
  }

  let res = 0;
  for (let j = m; j >= 0; j--) {
    if (dp[j]) {
      res = j;
      break;
    }
  }

  return res;
};

