/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 * * 
 * At ith day, jth transcation happened.
 * 
 *   ----------> Sell ------------
 *  |                             |
 * Hold                         Unhold
 *  |                             |
 *   ----------- Buy <------------
 * 
 * hold[i][j] = Max(hold[i-1][j], unhold[i-1][j] - prices[i])
 * unhold[i][j] = Max(unhold[i-1][j], hold[i-1][j-1] + prices[i])
 * 
 */
var maxProfit = function (k, prices) {
  if (k > prices.length / 2) return maxProfitWithAnyTransactions(prices);

  let hold = new Array(prices.length).fill(0).map(() => new Array(k + 1).fill(0));
  let unhold = new Array(prices.length).fill(0).map(() => new Array(k + 1).fill(0));

  hold[0][0] = 0 - prices[0];
  for (let i = 1; i < prices.length; i++) {
    hold[i][0] = Math.max(hold[i - 1][0], 0 - prices[i]);
  }

  for (let j = 1; j <= k; j++) {
    hold[0][j] = 0 - prices[0];
  }

  for (let j = 1; j <= k; j++) {
    for (let i = 1; i < prices.length; i++) {
      hold[i][j] = Math.max(hold[i - 1][j], unhold[i - 1][j] - prices[i]);
      unhold[i][j] = Math.max(unhold[i - 1][j], hold[i - 1][j - 1] + prices[i]);
    }
  }

  return Math.max(hold[prices.length - 1][k], unhold[prices.length - 1][k]);
};

var maxProfitWithAnyTransactions = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }

  return maxProfit;
};

// var maxProfit = function (k, prices) {
//     if (k > prices.length / 2) return maxProfitWithAnyTransactions(prices);

//     let dp = new Array(k + 1).fill(null).map(() => new Array(prices.length).fill(0));

//     for (let i = 1; i <= k; i++) {
//         let localMax = -prices[0];
//         for (let j = 1; j < prices.length; j++) {
//             dp[i][j] = Math.max(dp[i][j - 1], localMax + prices[j]);
//             localMax = Math.max(localMax, dp[i - 1][j - 1] - prices[j]);
//         }
//     }

//     return dp[k][prices.length - 1];
// };
