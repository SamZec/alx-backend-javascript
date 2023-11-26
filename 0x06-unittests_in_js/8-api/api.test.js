const { expect } = require('chai');
const request = require('request');

describe('index page', function () {
  it('checks correct API status code', function (done) {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('GET / gives correct API response', function (done) {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
