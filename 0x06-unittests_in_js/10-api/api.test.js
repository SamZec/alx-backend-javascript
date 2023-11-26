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

describe('cart page', function () {
  it('GET /cart/:id status code with number', function (done) {
    request('http://localhost:7865/cart/10', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 10');
      done();
    });
  });
  it('GET /cart/:id status code with string', function (done) {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('/login endpoint', function () {
  it('POST /login status code', function (done) {
    const url = 'http://localhost:7865/login';
    request.post(url, {json: {userName: 'Betty'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});

describe('/available_payments enpoint', function () {
  it('GET /available_payments status code', function (done) {
    const url = 'http://localhost:7865/available_payments';
    const object = {
      payment_methods: {
        credit_cards: true,
	paypal: false
      }
    };
    request(url, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal(object);
      done();
    });
  });
});
