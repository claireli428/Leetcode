/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * dp[i][j]: max number of strings that formed with i 0s and j 1s
 * 
 * dp[i][j] = max(dp[i-k0][j-k1]) + 1 (k0, k1 is number of zeros/ones in kth string, k = 0~s.length-1)
 * 
 */
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let k = 0; k < strs.length; k++) {
    let zeros = strs[k].split('').filter(c => c === '0');
    let ones = strs[k].split('').filter(c => c === '1');

    for (let i = m; i >= zeros.length; i--) {
      for (let j = n; j >= ones.length; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros.length][j - ones.length] + 1);
      }
    }
  }

  return dp[m][n]
};

var findMaxForm = function (strs, m, n) {
  let max = 0;
  for (let i = 0; i < strs.length; i++) {
    let zeros = strs[i].split('').filter(c => c === '0');
    let ones = strs[i].split('').filter(c => c === '1');
    if (zeros.length <= m && ones.length <= n) {
      let left = strs.slice(0, i), right = strs.slice(i + 1);
      let newStr = [...left, ...right];
      max = Math.max(max, findMaxForm(newStr, m - zeros.length, n - ones.length) + 1);
    }
  }
  return max;
};
