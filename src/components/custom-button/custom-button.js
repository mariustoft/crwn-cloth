import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignInButton, ...otherProps }) => (
  <button
    className={`${isGoogleSignInButton && "blue"} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
