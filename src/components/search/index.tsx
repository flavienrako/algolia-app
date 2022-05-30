import React from "react";
import {
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from "react-instantsearch-dom";
import Card from "./card";

const Search: React.FC = () => {
  return (
    <div>
      <Configure hitsPerPage={20} />
      <SearchBox />
      <div className="results">
        <Hits hitComponent={Card} />
      </div>
      <Pagination />
    </div>
  );
};

export default Search;
