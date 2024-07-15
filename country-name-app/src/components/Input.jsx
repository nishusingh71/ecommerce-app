import React, { useState } from "react";
import Country from "./Country";
import { useDispatch } from "react-redux";
import { searchCountries } from "./redux/actions/country.action";
export default function Input() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const dispatch = useDispatch();
  const changeInput = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
    dispatch(searchCountries(event.target.value, 1, itemsPerPage));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(searchCountries(search, page, itemsPerPage));
  };
  return (
    <div className="container mt-3 ">
      <div className="input-group mb-5">
        <input
          type="search"
          className="form-control"
          placeholder="search country"
          value={search}
          onChange={changeInput}
        />
      </div>
      <Country />
      <div>
        {Array.from(
          { length: Math.ceil(totalItems / itemsPerPage) },
          (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
