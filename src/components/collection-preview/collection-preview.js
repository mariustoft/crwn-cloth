import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} 
          // onClick={}
          {...item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
// export default <CollectionPreview />;
