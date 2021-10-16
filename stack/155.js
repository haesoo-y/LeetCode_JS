var MinStack = function () {
  this._stack = {};
  this._length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this._stack[this._length] = val;
  this._length += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this._length -= 1;
  delete this._stack[this._length];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._stack[this._length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...Object.values(this._stack));
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
