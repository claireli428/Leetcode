/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sell1 = 0, sell2 = 0, buy1 = Number.MIN_SAFE_INTEGER, buy2 = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++) {
        buy1 = Math.max(buy1, -prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);
        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell2 = Math.max(sell2, buy2 + prices[i]);
    }
    return sell2;
};
