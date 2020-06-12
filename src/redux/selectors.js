import { createSelector } from "reselect";

// Cart selectors
export const isCartHidden = createSelector(
  (state) => state.cart,
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  (state) => state.cart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
);

// User selectors
export const selectCurrentUser = createSelector(
  (state) => state.user,
  (user) => user.currentUser
);
