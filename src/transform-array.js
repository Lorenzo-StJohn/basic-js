const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const ans = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") i += 1;
    else if (arr[i] === "--discard-prev") {
      if (ans.length > 0 && (i < 2 || arr[i - 2] !== "--discard-next"))
        ans.pop();
    } else if (arr[i] === "--double-next") {
      if (i + 1 < arr.length) ans.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && (i < 2 || arr[i - 2] !== "--discard-next"))
        ans.push(arr[i - 1]);
    } else ans.push(arr[i]);
  }
  return ans;
}

module.exports = {
  transform,
};
