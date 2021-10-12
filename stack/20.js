/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];
  for (const c of s) {
    if (openBrackets.includes(c)) {
      stack.push(c);
    } else {
      const bracketIndex = closeBrackets.indexOf(c);
      if (stack[stack.length - 1] === openBrackets[bracketIndex]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
