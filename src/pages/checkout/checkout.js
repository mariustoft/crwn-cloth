import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import "./checkout.scss";

export default connect(
  createStructuredSelector({ selectCartItems, selectCartTotal })
)(({ selectCartItems, selectCartTotal }) => (
  <div className="checkout">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {selectCartItems.map((item) => (
      <CheckoutItem key={item.id} {...item} />
    ))}
    <span className="total">TOTAL: ${selectCartTotal}</span>
    <StripeCheckoutButton price={selectCartTotal} />
    <div className='test-warning'>
      *Please use the folowint testing card to pay*
      <br />
      4242 4242 4242 4242 - Exp. 01/23 : CVS-123
    </div>
  </div>
));
