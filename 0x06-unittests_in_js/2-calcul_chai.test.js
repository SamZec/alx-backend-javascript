const calculateNumber = require("./2-calcul_chai.js");
const chai = require('chai');
const expect = chai.expect;

describe("calculateNumber test", function() {
  it("it round the first argument and SUM", function() {
    expect(calculateNumber('SUM', 1.1, 0)).to.equal(1);
    expect(calculateNumber('SUM', 0.5, 0)).to.equal(1);
    expect(calculateNumber('SUM', 2.1, 0)).to.equal(2);
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and SUM", function() {
    expect(calculateNumber('SUM', 0, 1.0)).to.equal(1);
    expect(calculateNumber('SUM', 0, 0.5)).to.equal(1);
    expect(calculateNumber('SUM', 0, 2.1)).to.equal(2);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and SUM", function() {
    expect(calculateNumber('SUM', 5.6, 3.0)).to.equal(9);
    expect(calculateNumber('SUM', 0.5, 3.0)).to.equal(4);
    expect(calculateNumber('SUM', 3.5, 4.5)).to.equal(9);
  });
});

describe("calculateNumber test", function() {
  it("it round the first argument and SUBTRACT", function() {
    expect(calculateNumber('SUBTRACT', 1.1, 0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 0.5, 0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 2.1, 0)).to.equal(2);
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and SUBTRACT", function() {
    expect(calculateNumber('SUBTRACT', 0, 1.0)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 0, 0.5)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 0, 2.1)).to.equal(-2);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and SUBTRACT", function() {
    expect(calculateNumber('SUBTRACT', 5.6, 3.0)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 0.5, 3.0)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3.5, 4.5)).to.equal(-1);
  });
});

describe("calculateNumber test", function() {
  it("it round the first argument and DIVIDE", function() {
    expect(calculateNumber('DIVIDE', 1.1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0.5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 2.1, 0)).to.equal('Error');
  });
});

describe("calculateNumber test", function() {
  it("it round the second argument and DIVIDE", function() {
    expect(calculateNumber('DIVIDE', 0, 1.0)).to.equal(0);
    expect(calculateNumber('DIVIDE', 0, 0.5)).to.equal(0);
    expect(calculateNumber('DIVIDE', 0, 2.1)).to.equal(0);
  });
});

describe("calculateNumber test", function() {
  it("it round  both arguments and DIVIDE", function() {
    expect(calculateNumber('DIVIDE', 5.6, 3.0)).to.equal(2);
    expect(calculateNumber('DIVIDE', 0.5, 3.0)).to.equal(1/3);
    expect(calculateNumber('DIVIDE', 3.5, 4.5)).to.equal(0.8);
  });
});
