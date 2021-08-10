describe("Helpers test", function() {
    
    it('should sum up all payments', function() {
        allPayments = { payment1: {
            billAmt: '50',
            tipAmt: '4',
            tipPercent: 8
        }, payment2: {
            billAmt: '100',
            tipAmt: '4',
            tipPercent: 4
        }}
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(8);
    })

    it('should calculate the tip%', function(){
        allPayments = { payment1: {
            billAmt: '50',
            tipAmt: '4',
            tipPercent: 8
        }, payment2: {
            billAmt: '100',
            tipAmt: '4',
            tipPercent: 4
        }}
        expect(calculateTipPercent(allPayments.payment1.billAmt, allPayments.payment1.tipAmt)).toEqual(8)
    })
    /*testing appednTd in payments.test.js because it is the core functionality of appendPaymentTable */


    afterEach(function(){
        allPayments = {}
    })
})