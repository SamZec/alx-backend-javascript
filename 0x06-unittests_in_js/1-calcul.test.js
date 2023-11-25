const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

describe("calculateNumber test", function() {
  it("it round the first argument and SUM", function() {
    assert.equal(calculateNumber('SUM', 1.1, 0), 1);
    assert.equal(calculateNumber('SUM', 0.5, 0), 1);
    assert.equal(calculateNumber('SUM', 2.1, 0), 2);
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and SUM", function() {
    assert.equal(calculateNumber('SUM', 0, 1.0), 1);
    assert.equal(calculateNumber('SUM', 0, 0.5), 1);
    assert.equal(calculateNumber('SUM', 0, 2.1), 2);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and SUM", function() {
    assert.equal(calculateNumber('SUM', 5.6, 3.0), 9);
    assert.equal(calculateNumber('SUM', 0.5, 3.0), 4);
    assert.equal(calculateNumber('SUM', 3.5, 4.5), 9);
  });
});

describe("calculateNumber test", function() {
  it("it round the first argument and SUBTRACT", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.1, 0), 1);
    assert.equal(calculateNumber('SUBTRACT', 0.5, 0), 1);
    assert.equal(calculateNumber('SUBTRACT', 2.1, 0), 2);
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and SUBTRACT", function() {
    assert.equal(calculateNumber('SUBTRACT', 0, 1.0), -1);
    assert.equal(calculateNumber('SUBTRACT', 0, 0.5), -1);
    assert.equal(calculateNumber('SUBTRACT', 0, 2.1), -2);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and SUBTRACT", function() {
    assert.equal(calculateNumber('SUBTRACT', 5.6, 3.0), 3);
    assert.equal(calculateNumber('SUBTRACT', 0.5, 3.0), -2);
    assert.equal(calculateNumber('SUBTRACT', 3.5, 4.5), -1);
  });
});

describe("calculateNumber test", function() {
  it("it round the first argument and DIVIDE", function() {
    assert.equal(calculateNumber('DIVIDE', 1.1, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0.5, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 2.1, 0), 'Error');
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and DIVIDE", function() {
    assert.equal(calculateNumber('DIVIDE', 0, 1.0), 0);
    assert.equal(calculateNumber('DIVIDE', 0, 0.5), 0);
    assert.equal(calculateNumber('DIVIDE', 0, 2.1), 0);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and DIVIDE", function() {
    assert.equal(calculateNumber('DIVIDE', 5.6, 3.0), 2);
    assert.equal(calculateNumber('DIVIDE', 0.5, 3.0), 1/3);
    assert.equal(calculateNumber('DIVIDE', 3.5, 4.5), 0.8);
  });
});
