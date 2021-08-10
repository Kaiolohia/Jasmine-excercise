
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 25000,
    years: 5,
    rate: 1,
  }
  expect(calculateMonthlyPayment(values)).toEqual('427.34')
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 25000,
    years: 5,
    rate: 1,
  }
  expect(calculateMonthlyPayment(values)).toContain('.34')
});

