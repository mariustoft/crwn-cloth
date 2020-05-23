import React from "react";

import "./form-input.scss";

const Ade = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label && (
      <label className={`${otherProps.value && "shrink"} form-input-label`}>
        {label}
      </label>
    )}
  </div>
);

export default Ade;
