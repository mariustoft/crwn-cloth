import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

import { selectCartItems } from "../../redux/selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

export default withRouter(
  connect(createStructuredSelector({ selectCartItems }))(
    ({ selectCartItems, history, dispatch }) => {
      return (
        <div className="cart-dropdown">
          <div className="cart-items">
            {selectCartItems.length ? (
              selectCartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            ) : (
              <span className="empty-message">Your cart is empty</span>
            )}
          </div>
          <CustomButton
            onClick={() => {
              dispatch({ type: "TOGGLE_CART_HIDDEN" });
              history.push("/checkout");
            }}
          >
            Go to checkout
          </CustomButton>
        </div>
      );
    }
  )
);
