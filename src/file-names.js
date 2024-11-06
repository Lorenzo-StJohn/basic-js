const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  const ans = [];
  let temp;
  let count;
  for (let i = 0; i < names.length; i += 1) {
    obj[names[i]] ??= i;
    if (obj[names[i]] !== i) {
      count = 1;
      temp = `${names[i]}(${count})`;
      obj[temp] ??= i;
      while (obj[temp] !== i) {
        count += 1;
        temp = `${names[i]}(${count})`;
        obj[temp] ??= i;
      }
      ans.push(temp);
    } else {
      ans.push(names[i]);
    }
  }
  return ans;
}

module.exports = {
  renameFiles,
};
