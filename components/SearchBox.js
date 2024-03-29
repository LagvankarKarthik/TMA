import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-4">
      {" "}
      <input
        className="form-control"
        placeholder="Type to search"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
