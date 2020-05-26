import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

export default createStore(
  combineReducers({
    user: (
      state = {
        currentUser: null,
      },
      action
    ) =>
      action.type === "SET_CURRENT_USER"
        ? {
            currentUser: action.payload,
          }
        : state,
    cart: (
      state = {
        hidden: true,
      },
      action
    ) =>
      action.type === "TOGGLE_CART_HIDDEN"
        ? {
            hidden: !state.hidden,
          }
        : state,
  }),
  applyMiddleware(...[logger])
);
