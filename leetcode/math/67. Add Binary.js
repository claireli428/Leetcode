/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let aIdx = a.length - 1, bIdx = b.length - 1;
    let res = "";
    while(aIdx >= 0 && bIdx >= 0) {
        let sum = 0;
        if(a[aIdx] === b[bIdx]) {
            sum += carry;
            carry = a[aIdx] === '1' ? 1 : 0;
        } else {
            if(carry === 0) sum += 1;
        }
        res = sum + res;
        aIdx--;
        bIdx--;
    }

    while(aIdx >= 0) {
        if(a[aIdx] === '1') {
            res = (carry^1) + res;
        } else {
            res = carry + res;
            carry = 0;
        }
        aIdx--;
    }  

    while(bIdx >= 0) {
        if(b[bIdx] === '1') {
            res = (carry^1) + res;
        } else {
            res = carry + res;
            carry = 0;
        }
        bIdx--;
    } 

    if(carry) res = carry + res;

    return res;
};
