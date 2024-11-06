const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let ans = Math.abs(n);
  let temp;
  while (ans > 9) {
    temp = 0;
    while (ans > 0) {
      temp += ans % 10;
      ans -= ans % 10;
      ans /= 10;
    }
    ans = temp;
  }
  return ans;
}

module.exports = {
  getSumOfDigits,
};
