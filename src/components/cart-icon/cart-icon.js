import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";

export default connect(null, (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
}))(({ toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{"0"}</span>
  </div>
));
