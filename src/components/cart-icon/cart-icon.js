import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import React from "react";
import { connect } from "react-redux";
import "./cart-icon.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/selectors";

export default connect(
  createStructuredSelector({ selectCartItemsCount }),
  (dispatch) => ({
    toggleCartHidden: () =>
      dispatch({
        type: "TOGGLE_CART_HIDDEN",
      }),
  })
)(({ selectCartItemsCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{selectCartItemsCount}</span>
  </div>
));
