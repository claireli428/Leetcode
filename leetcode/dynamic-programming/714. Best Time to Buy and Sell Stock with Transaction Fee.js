/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  if(!prices.length) return 0;

  let hold = new Array(prices.length).fill(0);
  let unhold = new Array(prices.length).fill(0);

  hold[0] = 0 - prices[0];
  for (let i = 1; i < prices.length; i++) {
    hold[i] = Math.max(hold[i - 1], unhold[i - 1] - prices[i]);
    unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i] - fee);
  }

  return Math.max(hold[prices.length - 1], unhold[prices.length - 1]);
};
