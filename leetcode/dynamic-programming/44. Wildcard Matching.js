/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = new Array(s.length+1).fill(null).map(() => new Array(p.length+1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= s.length; i++) {
        dp[i][0] = false;
    }
    for (let j = 1; j <= p.length; j++) {
        if(p[j-1] === '*') {
            dp[0][j] = dp[0][j-1];
        } else {
            dp[0][j] = false;
        }
    }

    for(let i = 1; i <= s.length; i++) {
        for (let j = 1; j <=p.length; j++) {
            let sIdx = i - 1, pIdx = j - 1;
            if(s[sIdx] === p[pIdx] || p[pIdx] === '?') {
                dp[i][j] = dp[i-1][j-1];
            } else if(p[pIdx] === '*') {
                dp[i][j] = dp[i][j-1] || dp[i-1][j-1] || dp[i-1][j];
            }
        }
    }

    return dp[s.length][p.length];
};