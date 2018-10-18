/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(!triangle.length) return 0;

    const n = triangle.length;
    let dp = [triangle[0][0]];

    for(let i = 1; i < n; i++) {
        for(let j = i; j >= 0; j--) {
            if(j === i) dp[j] = dp[j-1] + triangle[i][j];
            if(j === 0) dp[j] = dp[j] + triangle[i][j];
            if(j !== i && j !== 0) dp[j] = Math.min(dp[j], dp[j-1]) + triangle[i][j];
        }
    }

    return Math.min(...dp);
};
