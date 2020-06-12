import { combineReducers, createStore, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { addItemToCart, removeItemFromCart } from "./util";

import DIR_DATA from "./directory.data";
import COLLECTIONS_DATA from "./collections.data";

// STORE
const rootReducer = combineReducers({
  collections: (state = COLLECTIONS_DATA, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  directory: (state = DIR_DATA, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
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
});

// PERSISTOR
export const persistentRootReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["cart"],
  },
  rootReducer
);

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistentRootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default { store, persistor };
