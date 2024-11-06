const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  number: 0,
  links: [],
  getLength() {
    return this.number;
  },
  addLink(value) {
    this.links.push(value);
    this.number += 1;
    return this;
  },
  removeLink(position) {
    if (
      position % 1 !== 0 ||
      typeof position !== "number" ||
      position < 1 ||
      position > this.number
    ) {
      this.number = 0;
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      for (let i = position - 1; i < this.number - 1; i += 1) {
        this.links[i] = this.links[i + 1];
      }
      this.links.pop();
      this.number -= 1;
      return this;
    }
  },
  reverseChain() {
    let temp;
    for (let i = 0; i * 2 < this.number; i += 1) {
      temp = this.links[i];
      this.links[i] = this.links[this.number - i - 1];
      this.links[this.number - i - 1] = temp;
    }
    return this;
  },
  finishChain() {
    let ans = "";
    for (let i = 0; i < this.number; i += 1) {
      if (i > 0) ans += "~~";
      ans += `( ${this.links[i]} )`;
    }
    this.number = 0;
    this.links = [];
    return ans;
  },
};

module.exports = {
  chainMaker,
};
