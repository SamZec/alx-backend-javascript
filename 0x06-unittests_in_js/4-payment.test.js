const sinon = require('sinon');
const { expect } = require('chai');
const { it, describe } = require('mocha');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('', () => {
  it('checking if numbers round with spies', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    stub.restore();
    const console = sinon.spy(console, 'log');
    expect(console.calledWith('The total is: 10'));
    console.restore()
  });
});
