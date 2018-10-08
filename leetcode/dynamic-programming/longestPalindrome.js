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
    var start = 0, maxLen = 1, dp = new Array(s.length).fill(false).map(() => {return new Array(s.length).fill(false)});

    //From start
    for (var r = 0; r < s.length; r++) {
        for(var l = r; l >= 0; l--) {
            dp[l][r] = s[l] === s[r] && (r - l < 3 || dp[l+1][r-1]);
            
            if(dp[l][r] && r - l + 1 > maxLen) {
                start = l;
                maxLen = r - l + 1;
            }
        }
    }

    // From end
    // for (var l = s.length - 1; l >= 0; l--) {
    //     for(var r = l; r < s.length; r++) {
    //         dp[l][r] = s[l] === s[r] && (r - l < 3 || dp[l+1][r-1]);
            
    //         if(dp[l][r] && r - l + 1 > maxLen) {
    //             start = l;
    //             maxLen = r - l + 1;
    //         }
    //     }
    // }

    return s.substr(start, max);
};
