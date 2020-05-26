import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import React from "react";
import { connect } from "react-redux";
import "./cart-icon.scss";

export default connect(
  ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden,
  }),
  (dispatch) => ({
    toggleCartHidden: () =>
      dispatch({
        type: "TOGGLE_CART_HIDDEN",
      }),
  })
)(({ currentUser, hidden, toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{hidden && currentUser && "1"}</span>
  </div>
));
