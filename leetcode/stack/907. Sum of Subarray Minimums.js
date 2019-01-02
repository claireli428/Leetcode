/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    if(!A.length) return 0;

    let stack = [];
    let nextLess = new Map();
    for(let i = 0; i < A.length; i++) {
        while (stack.length && A[stack[stack.length - 1]] >= A[i]) {
            let top = stack.pop();
            nextLess.set(top, i);
        }
        stack.push(i);
    }

    stack = [];
    let preLess = new Map();
    for(let i = A.length - 1; i >= 0; i--) {
        while (stack.length && A[stack[stack.length - 1]] > A[i]) {
            let top = stack.pop();
            preLess.set(top, i);
        }
        stack.push(i);
    }

    let res = 0;
    for (let i = 0; i < A.length; i++) {
        let preDist = preLess.has(i) ? i - preLess.get(i) : i + 1;
        let nextDist = nextLess.has(i) ? nextLess.get(i) - i : A.length - i;
        res += preDist * nextDist * A[i];
    }

    return res;
};