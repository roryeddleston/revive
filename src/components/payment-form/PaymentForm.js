import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './style.scss';

const PaymentForm = ({ amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
      });

      const paymentResult = await response.json();

      if (paymentResult.requires_action) {
        const { error: confirmError } = await stripe.confirmCardPayment(
          paymentResult.clientSecret
        );

        if (confirmError) {
          setErrorMessage(confirmError.message);
          setLoading(false);
          return;
        }
      }

      if (paymentResult.succeeded) {
        onPaymentSuccess();
      } else {
        setErrorMessage("Payment failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing payment.");
      console.error("Payment error:", error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <p className="amount-text">You're donating: <strong>£{(amount / 100).toFixed(2)}</strong></p>
      <CardElement className="card-input"/>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="green-btn" id="donate-now" type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
