import React from "react";

import CustomButton from "../custom-button/custom-button";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import "./collection-item.scss";

export default connect(null, (dispatch) => ({
  addItemToCart: (item) =>
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    }),
}))(({ addItemToCart, ...item }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <CustomButton onClick={() => addItemToCart(item)} inverted>
      Add to cart
    </CustomButton>
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
  </div>
));
