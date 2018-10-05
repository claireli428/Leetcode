/**
 * @param {string} s
 * @return {number}
 * two pointer and hash table
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0, left = 0, right = 0, dic = new Map();

    while(right < s.length) {
        if(dic.has(s[right])) {
            var idx = dic.get(s[right]);
            max = Math.max(max, right - left);
            while(left <= idx) {
                dic.delete[dic.get(s[left])];
                left++;
            }
        }
        
        dic.set(s[right], right);
        right++;
    }

    return Math.max(max, right - left);
};
