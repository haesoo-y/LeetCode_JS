/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let answer = 0;
  const chrObj = {};
  let isOdd = false;
  for (const chr of s) {
    chrObj[chr] ? (chrObj[chr] += 1) : (chrObj[chr] = 1);
  }
  for (const [key, value] of Object.entries(chrObj)) {
    if (value % 2 == 1) {
      isOdd = true;
      answer += value - 1;
    } else {
      answer += value;
    }
  }
  if (isOdd) return answer + 1;
  return answer;
};
