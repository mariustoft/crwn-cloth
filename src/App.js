import React from "react";
import { Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";

const App = () => (
  <div>
    <Route path="/" component={HomePage} />
    <Route path="/hats" component={HomePage} />
  </div>
);

export default App;
