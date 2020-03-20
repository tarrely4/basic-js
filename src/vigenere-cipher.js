class VigenereCipheringMachine {

    constructor(inverted) {
      this.inverted = inverted;
    }

    encrypt(message, key) {
      if (!message || !key) throw new Error();
      message = message.toLowerCase();
      key = key.toLowerCase();
      let cryptedMessage = '';
      let step = 97;
      let j = 0;
      let re = /[A-Za-z`]/;
      for (let i = 0; i < message.length; i++) {
        if (re.test(message[i])) {
          if (j == key.length) j = 0;
          let symbol = message.codePointAt(i) - step + key.codePointAt(j);
          // symbol += key.codePointAt(j);
          cryptedMessage += (symbol < 123) ? String.fromCharCode(symbol) : String.fromCharCode(symbol - 26);
          j++
        } else {
          cryptedMessage += message[i];
        }
      }
      return this.inverted == false ? String(cryptedMessage.toUpperCase().split('').reverse().join('')) : cryptedMessage.toUpperCase();
      // this.inverted == false ? String(cryptedMessage.toUpperCase().split('').reverse().join('')) :
    }

    decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) throw new Error();
      encryptedMessage = encryptedMessage.toLowerCase();
      key = key.toLowerCase();
      let message = '';
      let step = 97;
      let j = 0;
      let re = /[A-Za-z`]/;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (re.test(encryptedMessage[i])) {
          if (j == key.length) j = 0;
          let symbol = encryptedMessage.codePointAt(i) + step - key.codePointAt(j);
          message += (symbol < 97) ? String.fromCharCode(symbol + 26) : String.fromCharCode(symbol);
          j++
        } else {
          message += encryptedMessage[i];
        }
      }
      return this.inverted == false ? String(message.toUpperCase().split('').reverse().join('')) : message.toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
