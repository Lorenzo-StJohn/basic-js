const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(t = true) {
    this.type = t;
  }
  encrypt(message, key) {
    if (typeof key === "undefined" || typeof message === "undefined")
      throw new Error("Incorrect arguments!");
    let ans = "";
    let temp;
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] >= "A" && message[i] <= "Z") {
        temp = message.charCodeAt(i) + key.charCodeAt(j) - "A".charCodeAt(0);
        if (temp > "Z".charCodeAt(0)) temp -= 26;
        ans += String.fromCharCode(temp);
        ++j;
        if (j === key.length) j = 0;
      } else ans += message[i];
    }
    if (!this.type) ans = ans.split("").reverse().join("");
    return ans;
  }
  decrypt(message, key) {
    if (typeof key === "undefined" || typeof message === "undefined")
      throw new Error("Incorrect arguments!");
    let ans = "";
    let temp;
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] >= "A" && message[i] <= "Z") {
        temp = message.charCodeAt(i) - key.charCodeAt(j) + "A".charCodeAt(0);
        if (temp < "A".charCodeAt(0)) temp += 26;
        ans += String.fromCharCode(temp);
        ++j;
        if (j === key.length) j = 0;
      } else ans += message[i];
    }
    if (!this.type) ans = ans.split("").reverse().join("");
    return ans;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
