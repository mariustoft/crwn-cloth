import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors";

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection.scss";

const CollectionPage = ({ selectCollection, match }) => {
  return (
    <div className="collection-page">
      <h1 className="title">{match.params.collectionID.toUpperCase()}</h1>
      <div className="preview">
        {selectCollection.items.map((item, index) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  selectCollection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
