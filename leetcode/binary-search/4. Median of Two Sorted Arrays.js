/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * take k/2 from nums1 and nums 2, if nums1[k/2] < nums2[k/2], drop 0-k/2 from nums1(new nums1)
 * findkth(new nums1, nums2, k-k/2)
 */
var findKth = function(A, B, k) {
    if(A.length === 0)
        return B[k-1];
    if(B.length === 0)
        return A[k-1];
    if(k <= 1)
        return Math.min(A[0], B[0]);


    var l = Math.min(parseInt(k/2), A.length, B.length), newA = A, newB = B;
    if(A[l-1] < B[l-1])
        newA = A.length > l ? A.slice(l) : [];
    else
        newB = B.length > l ? B.slice(l) : [];

    return findKth(newA, newB, k-l);

};

var findMedianSortedArrays = function(nums1, nums2) {
    var n1 = nums1.length, n2 = nums2.length;
    if((n1+n2)%2 === 0)
        return (findKth(nums1, nums2, (n1+n2)/2) + findKth(nums1, nums2, (n1+n2)/2 + 1))/2;
    else
        return findKth(nums1, nums2, (n1+n2+1)/2);
};
