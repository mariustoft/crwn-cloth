import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(() => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
));
