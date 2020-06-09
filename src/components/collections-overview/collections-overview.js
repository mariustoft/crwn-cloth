import React from "react";

import CollectionPreview from "../collection-preview/collection-preview";

import "./collections-overview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsData } from "../../redux/selectors";

export default connect(createStructuredSelector({ collectionsData }))(
  ({ collectionsData }) => (
    <div className="collections-overview">
      {collectionsData.map(({ ...collection }) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
);
