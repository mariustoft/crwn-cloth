import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const addItemToCart = (existingCartItems, cartItemToAdd) => {
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return existingCartItems.map((cartItem) =>
      cartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [ { ...cartItemToAdd, quantity: 1 }, ...existingCartItems];
};

export default createStore(
  combineReducers({
    user: (
      state = {
        currentUser: null,
      },
      action
    ) => {
      switch (action.type) {
        case "SET_CURRENT_USER":
          return {
            ...state,
            currentUser: action.payload,
          };
        default:
          return state;
      }
    },
    cart: (
      state = {
        hidden: true,
        cartItems: [],
      },
      action
    ) => {
      switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
          return {
            ...state,
            hidden: !state.hidden,
          };
        case "ADD_ITEM":
          return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
          };
        default:
          return state;
      }
    },
  }),
  applyMiddleware(...[logger])
);
