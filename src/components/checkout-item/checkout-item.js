import React from "react";

import "./checkout-item.scss";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCartItemsCount } from "../../redux/selectors";

export default connect()(({ dispatch, ...item }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt={item.name} />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div
        className="arrow"
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: item,
          })
        }
      >
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div
        className="arrow"
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: item,
          })
        }
      >
        &#10095;
      </div>
    </span>
    <span className="price">{item.price}</span>
    <div
      className="remove-button"
      onClick={() =>
        dispatch({
          type: "CLEAR_ITEM_FROM_CART",
          payload: item,
        })
      }
    >
      &#10005;
    </div>
  </div>
));
