const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      if (Math.round(b)) {
        return Math.round(a) / Math.round(b);
      } else {
        return 'Error';
      }
    }
  }
};

module.exports = Utils;
