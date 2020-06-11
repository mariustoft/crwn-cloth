import React from "react";

import CollectionPreview from "../collection-preview/collection-preview";

import "./collections-overview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsData } from "../../redux/selectors";

export default connect(createStructuredSelector({ collectionsData }))(
  ({ collectionsData }) => {
 ˝   return (
      <div className="collections-overview">
        {Object.values(collectionsData).map(({ ...collection }) => (
          <CollectionPreview key={Math.random()} {...collection} />
        ))}
      </div>
    );
  }
);
