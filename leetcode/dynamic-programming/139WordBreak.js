/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    let memo = new Map();
    return helper(s, wordDict, memo);
};

var helper = function(s, wordDict, memo) {
    if(!s.length) return true;
    if(memo.has(s)) return memo.get(s);

    for(let l = 0; l < s.length; l++) {
        const left = s.substring(0, l), right = s.substring(l);
        if(wordDict.includes(right)) {
            memo.set(right, true);
            if (helper(left, wordDict, memo)) {
                memo.set(s, true);
                return true;
            } 
            memo.set(left, false);
        }
    }

    memo.set(s, false);
    return false;
}

//DP
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;

    for(let i = 1; i <= s.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

//BFS
var wordBreak = function(s, wordDict) {
    let queue = [''];
    while(queue.length) {
        const head = queue.shift();

        for(let i = 0; i < wordDict.length; i++) {
            const str = head + wordDict[i];
            if(str === s) return true;
            if(str.length < s.length && str === s.substring(0, str.length)) {
                queue.push(str);
            }
        }
    }

    return false;
};
