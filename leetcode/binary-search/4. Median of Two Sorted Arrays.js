/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * take k/2 from nums1 and nums 2, if nums1[k/2] < nums2[k/2], drop 0-k/2 from nums1(new nums1)
 * findkth(new nums1, nums2, k-k/2)
 */
var findKth = function (A, B, k) {
    if (!A.length) return B[k - 1];
    if (!B.length) return A[k - 1];
    if (k < 2) return Math.min(A[0], B[0]);

    const l = Math.min(Math.floor(k / 2), A.length, B.length);
    if (A[l - 1] > B[l - 1]) return findKth(A, B.slice(l), k - l);
    return findKth(A.slice(l), B, k - l);
};

var findMedianSortedArrays = function (nums1, nums2) {
    const n1 = nums1.length, n2 = nums2.length, mid = Math.floor((n1 + n2) / 2);
    if ((n1 + n2) % 2 === 0) {
        return (findKth(nums1, nums2, mid) + findKth(nums1, nums2, mid + 1)) / 2;
    }
    return findKth(nums1, nums2, mid + 1);
};
