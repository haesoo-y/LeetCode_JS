// 그리디

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const target = nums.length - 1;
  let max = 0;
  for (let i = 0; i <= target; i++) {
    max = Math.max(max, i + nums[i]); // 현재 최대로 갈 수 있는 범위
    if (max >= target) return true;
    if (max === i) return false;
  }
};
