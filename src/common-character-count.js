const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const used = new Array(s2.length).fill(true);
  let ans = 0;
  for (let i = 0; i < s1.length; i += 1) {
    for (let j = 0; j < s2.length; j += 1) {
      if (s1[i] === s2[j] && used[j]) {
        used[j] = false;
        ans += 1;
        j = s2.length;
      }
    }
  }
  return ans;
}

module.exports = {
  getCommonCharacterCount,
};
