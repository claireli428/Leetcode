/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var distance = 0, diff = x ^ y;

    while(diff > 0) {
        if(diff & 1 === 1) {
            distance++;
        }

        diff >>= 1;
    }

    return distance;
};
