const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value += '';
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position > this.chain.length || position < 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let fChain = this.chain.slice();
    let result = '';
    this.chain = [];
    for (let i = 0; i < fChain.length; i++) {
      result += '( ';
      result += fChain[i];
      result += ' )~~';
    }
    return result.slice(0, -2);
  }
};

module.exports = chainMaker;
