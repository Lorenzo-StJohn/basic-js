const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ans = "";
  let count;
  for (let i = 0; i < str.length; i += 1) {
    count = 1;
    while (i + count < str.length && str[i + count] === str[i]) count += 1;
    if (count > 1) ans += count;
    i += count - 1;
    ans += str[i];
  }
  return ans;
}

module.exports = {
  encodeLine,
};
