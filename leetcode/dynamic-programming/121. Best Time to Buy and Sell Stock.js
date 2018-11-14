/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > minPrice) {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        } else {
            minPrice = prices[i];
        }
    }

    return maxProfit;
};
