/**
 * @param {string} s
 * @return {string}
 */

//non dynamic programming solution
var longestPalindrome = function (s) {
    if (s.length <= 1)
        return s;

    var start = 0, maxLen = 1;
    for (var i = 0; i < s.length;) {
        if(s.length-i < Math.floor(maxLen / 2))
            break;

        var left = i, right = i;
        //duplicates always palindromic, later dups maxLens always less than formers
        while (right < s.length - 1 && s[right + 1] === s[i]) {
            right++;
        }
        i = right + 1;
        
        while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
            left--;
            right++;
        }
        if (right - left + 1 > maxLen) {
            start = left;
            maxLen = right - left + 1;
        }
    }

    return s.substr(start, maxLen);

};

//dynamic programming solution
var longestPalindrome = function (s) {
    if (s.length <= 1)
        return s;

    let start = 0, maxLen = 1;
    let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);

            if (dp[i][j] && j - i + 1 > maxLen) {
                start = i;
                maxLen = j - i + 1;
            }
        }
    }

    return s.substr(start, maxLen);
};

//memorized recursive
var longestPalindrome = function (s) {
  let memo = new Map();
  return helper(s, 0, s.length - 1, memo);
};

var helper = function (s, i, j, memo) {
  if (i > j) return "";
  if (i === j) return s[i];

  let cur = s.substring(i, j + 1);
  if (memo.has(cur)) return memo.get(cur);

  let left = helper(s, i, j - 1, memo);
  let right = helper(s, i + 1, j, memo);
  let middle = helper(s, i + 1, j - 1, memo);

  let str = left;
  if (right.length > str.length) str = right;
  if (middle.length > str.length) str = middle;

  if (s[i] === s[j] && middle.length === j - i - 1) {
    memo.set(cur, cur);
    return cur;
  }

  memo.set(cur, str);
  return str;
};
