const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let ans = 1;
    let now = 1;
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i]))
        ans = Math.max(ans, now + this.calculateDepth(arr[i]));
    }
    return ans;
  }
}

module.exports = {
  DepthCalculator,
};
