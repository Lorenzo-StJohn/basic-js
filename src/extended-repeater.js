const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (typeof options.addition === "undefined") options.addition = "";
  options.addition = String(options.addition);
  options.repeatTimes ??= 1;
  options.additionRepeatTimes ??= 1;
  options.separator ??= "+";
  options.additionSeparator ??= "|";
  let add = "";
  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    if (i > 0) add += options.additionSeparator;
    add += options.addition;
  }
  let ans = "";
  for (let i = 0; i < options.repeatTimes; i += 1) {
    if (i > 0) ans += options.separator;
    ans += str;
    ans += add;
  }
  return ans;
}

module.exports = {
  repeater,
};
