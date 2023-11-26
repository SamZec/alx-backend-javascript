module.exports = function getPaymentTokenFromAPI(success) {
  return new Promise((value) => {
    if (success) {
      value({data: 'Successful response from the API'});
    }
  });
};
