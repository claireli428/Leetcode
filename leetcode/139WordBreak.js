/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//BFS
var wordBreak = function(s, wordDict) {
    if(!s.length) return true;

    let queue = [''];

    while (queue.length) {
        let curStr = queue.shift();
        if(curStr === s) return true;

        if(curStr.length < s.length) {
            const start = curStr.length;
            for (let i = 0; i < wordDict.length; i++) {
                const word = wordDict[i], end = start + word.length;
                if(end <= s.length && s.substring(start, end) === word) {
                    queue.push(curStr+word);
                }
            }
        }
    }

    return false;
};

//Recursive
var wordBreak = function(s, wordDict) {
    let memo = new Map();
    return (s, wordDict, memo);
};

var helper = function (s, wordDict, memo) {
    if(!s.length) return true;

    if(memo.has(s)) return memo.get(s);

    for(let end = 0; end < s.length; end++) {
        const sub1 = s.substring(0, end), sub2 = s.substring(end);
        if(wordDict.includes(sub2)) {
            memo.set(sub2, true);
            if(helper(sub1, wordDict, memo)) {
                memo.set(s, true);
                return true;
            } else {
                memo.set(sub1, false);
            }
        }
    }

    memo.set(s, false);
    return false;
}
