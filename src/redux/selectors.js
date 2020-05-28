import { createSelector } from "reselect";

export const selectCartItems = createSelector(
  (state) => state.cart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
