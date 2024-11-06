const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let maxLength = 1;
  const arr = new Array(domains.length);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = domains[i].split(".").reverse();
    maxLength = Math.max(maxLength, arr[i].length);
  }
  const ans = {};
  const temp = new Array(domains.length).fill("");
  for (let i = 0; i < maxLength; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i < arr[j].length) {
        temp[j] += ".";
        temp[j] += arr[j][i];
        ans[temp[j]] ??= 0;
        ans[temp[j]] += 1;
      }
    }
  }
  return ans;
}

module.exports = {
  getDNSStats,
};
