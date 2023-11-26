const { expect } = require('chai');
const sinon = require('sinon')
const request = require('request');

describe('index page', function () {
  it('checks correct API status code', function () {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });
  it('checks correct API response', function () {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
    });
  });
  it('checks proper logging message on console', function () {
    consoleSpy = sinon.spy(console, 'log');
    expect(consoleSpy.calledWith('API available on localhost port 7865')).to.be.true;
  });
});
