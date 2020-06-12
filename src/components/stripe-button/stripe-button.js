import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GsveeB5iAuUdJBAXUXJCweohhBCDDV973rhAX5nlSeDpmjaCHtupLE5SpGmZR6XxruMbOWVjuODSETYrWHdhOun00G9bgUP3B";

  const onToken = (token) => {
    alert("Pyment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      image="https://sendeyo.com/up/d/f3eb2117da"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now Panel Label"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
