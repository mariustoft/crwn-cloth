import React from "react";

import "./checkout-item.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/selectors";

export default connect(createStructuredSelector({ selectCartItemsCount }))(
  ({ selectCartItemsCount, ...item }) => (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
);
