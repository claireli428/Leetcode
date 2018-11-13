/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    if (Math.abs(divisor) === 1) return dividend * divisor;

    const sign = dividend * divisor < 0 ? -1 : 1;
    dividend = Math.abs(dividend), divisor = Math.abs(divisor);
    let times = 0;
    while (dividend >= divisor) {
        let diff = 1, temp = divisor;
        const num = dividend >> 1;
        while (num >= temp) {
            temp <<= 1;
            diff <<= 1;
        }
        dividend -= temp;
        times += diff;
    }

    return times * sign;
};
