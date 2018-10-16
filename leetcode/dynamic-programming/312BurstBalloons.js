/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    if(!nums.length) return 0;

    nums.unshift(1);
    nums.push(1);
    const n = nums.length;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(0));
    
    for(let len = 1; len <= n - 2; len++) {
        for(let i = 0; i <= n - len -2; i++) {
            let j = i + len + 1;
            for(let k = i+1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i]*nums[k]*nums[j]);
            }
        }
    }

    return dp[0][n-1];
};
