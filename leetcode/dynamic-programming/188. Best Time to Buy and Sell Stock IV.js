/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (k > prices.length / 2) return maxProfitWithAnyTransactions(prices);

    let dp = new Array(k + 1).fill(null).map(() => new Array(prices.length).fill(0));

    for (let i = 1; i <= k; i++) {
        let localMax = -prices[0];
        for (let j = 1; j < prices.length; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], localMax + prices[j]);
            localMax = Math.max(localMax, dp[i - 1][j - 1] - prices[j]);
        }
    }

    return dp[k][prices.length - 1];
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
