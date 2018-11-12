/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
    if (Math.abs(divisor) === 1) return dividend*divisor;

    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    dividend = Math.abs(dividend), divisor = Math.abs(divisor);
    let times = 0;
    while (dividend >= divisor) {
        let diff = 1, temp = divisor;
        while (dividend >= (temp << 1)) {
            temp <<= 1;
            diff <<= 1;
        }
        dividend -= temp;
        times += diff;
    }

    return times * sign;
};
