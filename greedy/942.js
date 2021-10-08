/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let right = s.length;
  let left = 0;
  const answer = [];
  for (const c of s) {
    if (c === "I") {
      answer.push(left);
      left += 1;
    } else {
      answer.push(right);
      right -= 1;
    }
  }
  answer.push(right); // max 와 min 모두 같으므로 상관없음
  return answer;
};
