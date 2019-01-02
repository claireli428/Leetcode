/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let drop = k;
    let stack = [];
    for (let i = 0; i < num.length; i++) {
        while (stack.length && drop && stack[stack.length - 1] > num[i]) {
            stack.pop();
            drop--;
        }
        stack.push(num[i]);
    }

    while (drop > 0) {
        stack.pop();
        drop--;
    }

    while (stack[0] === '0') stack.shift();

    return stack.length ? stack.join('') : "0";
};