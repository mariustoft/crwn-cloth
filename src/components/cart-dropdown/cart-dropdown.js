import React from "react";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

import { selectCartItems } from "../../redux/selectors";
import { connect } from "react-redux";

export default connect((state) => ({
  selectCartItems: selectCartItems(state),
}))(({ selectCartItems }) => {
  console.log('selectCartItems loaded')
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
      {selectCartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>)}
);
