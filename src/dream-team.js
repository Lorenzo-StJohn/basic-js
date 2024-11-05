const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const arr = members.filter((el) => typeof el === "string");
  if (arr.length === 0) return false;
  return arr
    .reduce((acc, el) => (acc += el.trim()[0].toUpperCase()), "")
    .split("")
    .sort()
    .join("");
}

module.exports = {
  createDreamTeam,
};
