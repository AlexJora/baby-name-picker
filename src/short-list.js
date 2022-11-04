import React, { Fragment } from "react";
import NameList from "./name-list";

function ShortList({ names, shortList, setShortList }) {
  const shortListedNames = names.filter(entry => shortList.includes(entry.id));
  function removeFromList(id) {
    setShortList(shortList.filter(elem => elem !== id));
  }
  const hasNames = shortListedNames.length > 0;
  return (
    <div className="short-list">
      <h4 className="favorite">{hasNames ? 'Your favorites:' : 'Click some names below to create a favorite list of names:'}</h4>
      {hasNames && (
        <Fragment>

          <NameList nameList={shortListedNames} onItemClick={removeFromList} />

        </Fragment>
      )}
      <hr />
    </div>
  );
}

export default ShortList;