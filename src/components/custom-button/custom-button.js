import React from "react";

import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignInButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted && "inverted"} ${
      isGoogleSignInButton && "blue"
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
