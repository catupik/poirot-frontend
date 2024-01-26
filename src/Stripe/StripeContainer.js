import React from "react";
import { loadStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51OcsVgBa3Kheo6rmbWSNKHQ2nSUxR0ovwJIqXT4RWEFDSP84eZA9kJu554secaMIR4omZv2Gs3xuAr37j7xLnKNJ00HJyhJesb";
const stripeTestPromice = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return(
        <Elements stripe={stripeTestPromice}>
            <CheckoutForm/>
        </Elements>
    )
};

export default Stripe;