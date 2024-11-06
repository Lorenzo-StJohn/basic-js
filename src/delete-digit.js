const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split("");
  let j = 0;
  while (j + 1 < arr.length && arr[j + 1] <= arr[j]) j += 1;
  for (; j < arr.length - 1; j += 1) {
    arr[j] = arr[j + 1];
  }
  arr.pop();
  return Number(arr.join(""));
}

module.exports = {
  deleteDigit,
};
