module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 0;
      arr.forEach((el) => {
        depth = Array.isArray(el) ? Math.max(this.calculateDepth(el), depth) : depth;
      })
      return ++depth;
    }
};
