// SearchResults Component
import React from "react";

const SearchResults = () => {
  const results = [
    {
      id: "hello",
      City: "hyderabad",
    },
    {
      id: "hello",
      City: "hyderabad",
    },
    {
      id: "hello",
      City: "hyderabad",
    },
    {
      id: "hello",
      City: "hyderabad",
    },
  ];
  return (
    <>
      {results.map((item) => (
        <div className="search-option">{item.City}</div>
      ))}
    </>
  );
};

export default SearchResults;
