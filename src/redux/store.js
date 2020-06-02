import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Utils
const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [{ ...cartItemToAdd, quantity: 1 }, ...cartItems];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// STORE
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
        case "CLEAR_ITEM_FROM_CART":
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload.id
            ),
          };
        case "REMOVE_ITEM":
          return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload),
          };
        default:
          return state;
      }
    },
  }),
  applyMiddleware(...[logger])
);
