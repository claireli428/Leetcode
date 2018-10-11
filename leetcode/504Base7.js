/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let res = 0, base = 1, neg = num >= 0 ? "" : "-";
    num = Math.abs(num);
    while (num) {
        res += num % 7 * base;
        base *= 10;
        num = Math.floor(num / 7);
    }

    return neg+res;
};
