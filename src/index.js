// import { PersitGate } from "redux-persist/integration/react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";

import { store, persistor } from "./redux/store";

import App from "./App";
import "./index.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
