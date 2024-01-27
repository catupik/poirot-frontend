import React from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios';
import {getTotalPrice } from "../redux/cartSlice";
import { useSelector } from "react-redux";

 const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useSelector(getTotalPrice);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
        console.log("Stripe 23 | token generated", paymentMethod);
        // send token to backend here
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "https://poirot-m4bt.onrender.com/stripe/charge",
            {
              amount: 999,
              id: id,
            }
          );
          console.log('stripe 35 | data', response.data.success);
          if (response.data.success) {
            console.log('Payment successful');
          }
      
        } catch (error) {
          console.log('CheckoutForm.js 28 | error:', error);
        }
      } else {
        console.log('Stripe error:', error.message);
      }
      
  };
  return(
    <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
        <CardElement/>
        <button className="btn">Pay</button>
    </form>
  );
};

export default CheckoutForm;