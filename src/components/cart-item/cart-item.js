import React from "react";

import "./cart-item.scss";

export default ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt={item.name} />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x {item.price}
      </span>
    </div>
  </div>
);
