paypal.Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
          purchase_units: [{
              amount: {
                  value: '50.00'
              }
          }]
      });
  },
  
    style: {
        color: 'blue'
    },
  onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
          window.location.href = "payment.html";
          console.log("Payment Sucessfull")
      });
  },
  onError: function (err) {
      console.log('Something went wrong', err);
      window.alert("Something Went Wrong :(")
  }
}).render('#paypal-button-container'); // Display payment options on your web page
