import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";
import React from "react";
import { connect } from "react-redux";
import "./cart-icon.scss";

import { selectCartItemsCount } from "../../redux/selectors";

export default connect(
  (state) => ({
    nrItems: selectCartItemsCount(state),
  }),
  (dispatch) => ({
    toggleCartHidden: () =>
      dispatch({
        type: "TOGGLE_CART_HIDDEN",
      }),
  })
)(({ nrItems, toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{nrItems}</span>
  </div>
));
