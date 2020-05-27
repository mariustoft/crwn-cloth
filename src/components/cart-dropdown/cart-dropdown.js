import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

export default connect(({ cart }) => ({
  cart,
}))(({ cart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cart.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
));
