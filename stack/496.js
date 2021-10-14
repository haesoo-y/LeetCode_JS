/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const NGEobj = {};
  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    NGEobj[current] = -1;
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > current) {
        NGEobj[current] = nums2[j];
        break;
      }
    }
  }
  return nums1.map((num) => NGEobj[num]);
};
