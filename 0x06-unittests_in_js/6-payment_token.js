module.exports = function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve('success').then((value) => {
      return {data: 'Successful response from the API'};
    });
  }
};
