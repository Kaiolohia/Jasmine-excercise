describe("Payments Test", function () {
  it("should submit payment info (tests all functions)", function () {
    let billAmtInput = document.getElementById("billAmt");
    let tipAmtInput = document.getElementById("tipAmt");
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    expect(submitPaymentInfo()).toBeUndefined();
  });

  afterEach(function () {
    let cleanupTr = document.getElementById("payment1");
    cleanupTr.remove();
    allPayments = {};
    updateSummary();
  });
});
