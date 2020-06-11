import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.js";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isCartHidden, selectCurrentUser } from "../../redux/selectors";

import "./header.scss";

const Header = connect(
  createStructuredSelector({
    selectCurrentUser,
    isCartHidden,
  })
)(({ selectCurrentUser, isCartHidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {selectCurrentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!isCartHidden && <CartDropdown />}
  </div>
));

export default Header;
