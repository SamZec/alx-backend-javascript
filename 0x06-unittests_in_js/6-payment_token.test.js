const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
const expect = chai.expect;

describe.only('getPaymentTokenFromAPI test', function () {
  it('checks promise instance', function () {
    const promise = getPaymentTokenFromAPI(true);
    expect(promise).to.an.instanceof(Promise);
  });

  it('checks Successful response from the API', function () {
    getPaymentTokenFromAPI(true).then((value) => {
      expect(value.data).to.equal('Successful response from the API');
      done();
    });
  });

  it('checks unuccessful response from the API', function () {
    getPaymentTokenFromAPI(false).then((value) => {
      expect(value).to.equal('');
    });
  });
});
