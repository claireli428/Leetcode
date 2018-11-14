/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator % denominator === 0) return (numerator / denominator) + "";

    let res = numerator * denominator > 0 ? "" : "-";

    numerator = Math.abs(numerator), denominator = Math.abs(denominator);
    res += Math.floor(numerator / denominator) + ".";

    numerator = numerator % denominator * 10;
    let visited = new Map();
    while (numerator) {
        visited.set(numerator, res.length);
        res += Math.floor(numerator / denominator)+'';
        numerator = numerator % denominator * 10;
        if(visited.has(numerator)) {
            res = res.substring(0, visited.get(numerator)) + '(' + res.substring(visited.get(numerator)) + ')'
            break;
        }
    }

    return res;

};
