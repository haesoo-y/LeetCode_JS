// 시간초과

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  return dfs(0, nums);
};

function dfs(index, arr) {
  const target = arr.length - 1;
  if (index === target) return true;
  if (index > target) return false;
  const maxJump = arr[index];
  for (let i = 1; i <= maxJump; i++) {
    const isReach = dfs(index + i, arr);
    if (isReach) return true;
  }
  return false;
}
