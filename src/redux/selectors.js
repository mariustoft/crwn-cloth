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
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

// User selectors
export const selectCurrentUser = createSelector(
  (state) => state.user,
  (user) => user.currentUser
);

// Directory selectors
export const dirData = createSelector(
  (state) => state.directory,
  (directory) => directory
);

// Collections selectors
export const collectionsData = createSelector(
  (state) => state.collections,
  (collections) => collections
);

// Shop selectors
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollection = (collectionUrlParam) => {
  console.log(collectionUrlParam)
  return createSelector(
    (state) => state.collections,
    (collections) =>
      collections.find(
        (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
};
