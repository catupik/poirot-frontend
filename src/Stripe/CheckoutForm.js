import React, { useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { getTotalPrice, getCartItems, clearCart } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useSelector(getTotalPrice);
  const cartItems = useSelector(getCartItems)
  const amount = totalPrice * 100;
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = async () => {
    setIsModalOpen(false);
    if (!isAuthenticated) {
        localStorage.removeItem("cart");
        dispatch(clearCart());
      }

    if(isAuthenticated){
        try{
            const response = await fetch("https://poirot-m4bt.onrender.com/purchase/" + user.sub, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cartItems }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error("Error updating purchase history:", error);
      }

      localStorage.removeItem("cart");
      dispatch(clearCart());
        }
    
  };

  console.log(cartItems)


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
            amount: amount,
            id: id,
          }
        );
        console.log("stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("Payment successful");

          setIsModalOpen(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | error:", error);
      }
    } else {
      console.log("Stripe error:", error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button className="btn">Check out</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p className="modal-text">Payment successful!</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
