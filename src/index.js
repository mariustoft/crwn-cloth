import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import React from "react";
import "./index.scss";

import App from "./app";

render(<BrowserRouter children={<App />} />, document.getElementById("root"));
