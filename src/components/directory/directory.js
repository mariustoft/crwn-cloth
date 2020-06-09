import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { dirData } from "../../redux/selectors";

export default connect(createStructuredSelector({ dirData }))(
  ({ dirData }) => (
    <div className="directory-menu">
      {dirData.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  )
);
