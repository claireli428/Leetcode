/**
 * @param {number} n
 * @return {number}
 * f(0) = 1;
 * f(1) = 10;
 * f(2) = f(1) + 9 * 9;
 * f(3) = f(2) + 9 * 9 * 8
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n < 2) return Math.pow(10, n);

  let count = 9;
  for (let i = 1; i < n; i++) {
    count *= 10 - i;
  }

  return countNumbersWithUniqueDigits(n - 1) + count;
};

//DP
var countNumbersWithUniqueDigits = function (n) {
  if (n < 2) return Math.pow(10, n);

  let dp = 10;
  for (let d = 2; d <= n; d++) {
    let count = 9;
    for (let i = 1; i < d; i++) {
      count *= 10 - i;
    }
    dp += count;
  }

  return dp;
};
