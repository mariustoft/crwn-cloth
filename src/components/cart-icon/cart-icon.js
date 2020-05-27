import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import React from "react";
import { connect } from "react-redux";
import "./cart-icon.scss";

export default connect(
  ({ user: { currentUser }, cart: { hidden, cartItems } }) => ({
    currentUser,
    hidden,
    cartItems: cartItems,
  }),


  (d) => ({
    toggleCartHidden: () =>
      d({
        type: "TOGGLE_CART_HIDDEN",
      }),
  })

  
)(({ cartItems, currentUser, toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{currentUser && cartItems.length}</span>
  </div>
));
