window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues(25000, 5, 1);
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues(amount, years, rate) {
  document.getElementById("loan-amount").value = amount
  document.getElementById("loan-years").value = years
  document.getElementById("loan-rate").value = rate
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values['rate'] / 100 ) / 12
  const amountOfPayments = Math.floor(values['years'] * 12)
  return ((monthlyRate * values['amount']) / (1-Math.pow((1 + monthlyRate), -amountOfPayments))).toFixed(2)
  /* Used the Given solution for the caluculator code, my attempts were leading no where and was wasting time*/ 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let calculatedDisplay = document.querySelector('span')
  calculatedDisplay.innerHTML = `<p>$${monthly}</p>`

}
