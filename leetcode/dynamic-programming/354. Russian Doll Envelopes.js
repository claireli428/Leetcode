/**
 * @param {number[][]} envelopes
 * @return {number}
 */

//==========================BS============================
var maxEnvelopes = function (envelopes) {
  if (envelopes.length <= 1) return envelopes.length;

  let { width, height } = getMiddle(envelopes);
  let left = [], right = [];
  for (let i = 0; i < envelopes.length; i++) {
    if(envelopes[i][0] < width && envelopes[i][1] < height) {
      left.push(envelopes[i]);
    }
    if(envelopes[i][0] > width && envelopes[i][1] > height) {
      right.push(envelopes[i]);
    }
  }

  return maxEnvelopes(left) + maxEnvelopes(right);
};

var getMiddle = function (envelopes) {
  let minW = Number.MAX_SAFE_INTEGER, minH = Number.MAX_SAFE_INTEGER;
  let maxW = 0, maxH = 0;
  for (let i = 0; i < envelopes.length; i++) {
    minW = Math.min(minW, envelopes[i][0]);
    minH = Math.min(minH, envelopes[i][1]);
    maxW = Math.max(maxW, envelopes[i][0]);
    maxH = Math.max(maxH, envelopes[i][1]);
  }

  return { width: Math.floor((minW + maxW) / 2), height: Math.floor((minH + maxH) / 2) };
}

//===================DP=========================
var maxEnvelopes = function (envelopes) {
  if (envelopes.length <= 1) return envelopes.length;
  envelopes = envelopes.sort((a, b) => a[0] - b[0]);

  let dp = new Array(envelopes.length).fill(1);
  let res = 1;
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }

  return res;
};

//=====================Recursive=======================
var maxEnvelopes = function (envelopes) {
  let memo = new Map();
  return helper(envelopes, [0, 0], memo);
};

var helper = function (envelopes, item, memo) {
  if (envelopes.length <= 1) return envelopes.length;

  const key = item.join(',');
  if (memo.has(key)) return memo.get(key);

  let res = 0;
  for (let i = 0; i < envelopes.length; i++) {
    if (envelopes[i][0] > item[0] && envelopes[i][1] > item[1]) {
      res = Math.max(res, 1 + helper(envelopes, envelopes[i], memo));
    }
  }

  memo.set(key, res);
  return res;
};
