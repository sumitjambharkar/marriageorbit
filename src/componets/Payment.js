function displayRazorpay() {
  const getData =async()=>{
    const data = await fetch("https://immense-sands-61563.herokuapp.com/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  const options = {
    key: "rzp_test_dgT6dQaeQPEj6s",
    currency: data.currency,
    amount: data.amount,
    name: "Marriageorbit.com",
    description: "Wallet Transaction",
    image: "https://immense-sands-61563.herokuapp.com/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "xxxxxx",
      email: "sujam",
      contact: "",
    },
  };
 
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  }
  getData()

}
export default displayRazorpay