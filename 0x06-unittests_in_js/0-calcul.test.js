const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe("calculateNumber test", function() {
  it("it round the first argument", function() {
    assert.equal(calculateNumber(1.1, 0), 1);
    assert.equal(calculateNumber(0.5, 0), 1);
    assert.equal(calculateNumber(2.1, 0), 2);
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument", function() {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 0.5), 1);
    assert.equal(calculateNumber(0, 2.1), 2);
  });
});

describe("calculateNumber test", function() {
  it("checks rounded", function() {
    assert.equal(calculateNumber(1, 3.5), 5);
  });
});

describe("calculateNumber test", function() {
  it("checks rounded", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});

describe("calculateNumber test", function() {
  it("checks rounded", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});

describe("calculateNumber test", function() {
  it("checks rounded", function() {
    assert.notEqual(calculateNumber(1.5, 3.7), 5.2);
  });
});

describe("calculateNumber test", function() {
  it("checks rounded", function() {
    assert.equal(calculateNumber('1.2', 3.7), 5);
  });
});
