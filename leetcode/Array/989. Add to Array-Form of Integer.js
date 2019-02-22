/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let B = [];
    while(K > 0) {
        B.unshift(K % 10);
        K = Math.floor(K/10);
    }
    
    while(B.length < A.length) B.unshift(0);
    while(A.length < B.length) A.unshift(0);
    
    let carry = 0;
    for(let i = B.length-1; i >= 0; i--) {
        let sum = B[i] + A[i] + carry;
        carry = Math.floor(sum / 10);
        B[i] = sum % 10;
    }
    
    if(carry === 1) B.unshift(1);
    
    return B;
};
