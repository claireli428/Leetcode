/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    function comp(a, b) {return a - b;} 
    g.sort(comp);
    s.sort(comp);

    var child = 0;
    for(var cookie = 0; child < g.length && cookie < s.length; cookie++) {
        if(g[child] <= s[cookie]) {
            child++;
        }
    }

    return child;
};
