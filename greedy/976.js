/**
 * @param {number[]} nums
 * @return {number}
 */
const isPossibleTriangle = (large, mid, small) => {
  return large < mid + small;
};

var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i <= nums.length - 3; i++) {
    const triArr = nums.slice(i, i + 3);
    if (isPossibleTriangle(...triArr)) {
      return triArr.reduce((acc, cur) => acc + cur, 0);
    }
  }
  return 0;
};
