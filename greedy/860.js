/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const machine = { five: 0, ten: 0 };
  for (const bill of bills) {
    if (bill === 5) {
      machine.five += 1;
    } else if (bill === 10) {
      if (!machine.five) return false;
      machine.ten += 1;
      machine.five -= 1;
    } else if (bill === 20) {
      // five 3 or ten 1 five 1
      if (machine.ten && machine.five) {
        machine.ten -= 1;
        machine.five -= 1;
      } else if (machine.five > 3) {
        machine.five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
