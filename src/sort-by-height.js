const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr.filter((el) => el !== -1);
  arr2.sort((a, b) => a - b);
  let j = 0;
  const ans = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      ans[i] = arr2[j];
      j += 1;
    }
  }
  return ans;
}

module.exports = {
  sortByHeight,
};
