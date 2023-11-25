const { ShouldThrow, expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToAPI = require('./5-payment.js');

describe('sendPaymentRequestToAPI Test', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs to the console the right messages', () => {
    sendPaymentRequestToAPI(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
  it('logs to the console the right messages', () => {
    sendPaymentRequestToAPI(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
