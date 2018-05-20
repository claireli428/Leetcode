/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Method 1, find i(k/2) number from A, find j(k-i) number from B
 * if [i-i] < [j] && [j-1] < [i] return medium
 * else if [i-i] > j, drop i-end from A
 * else [j-1] > [i], drop j-end from B
 *
 * Method 2, findkth(nums1, nums2, k)
 * take k/2 from nums1 and nums 2, if nums1[k/2] < nums2[k/2], drop 0-k/2 from nums1(new nums1)
 * findkth(new nums1, nums2, k-k/2)
 */
var findMedianSortedArrays = function(nums1, nums2) {

};