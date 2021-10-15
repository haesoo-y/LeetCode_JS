/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const record = [];
  for (const op of ops) {
    console.log(record);
    switch (op) {
      case 'C':
        record.pop();
        break;
      case 'D':
        record.push(record[record.length - 1] * 2);
        break;
      case '+':
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;
      default:
        record.push(Number(op));
    }
  }
  return record.reduce((acc, cur) => acc + cur, 0);
};
