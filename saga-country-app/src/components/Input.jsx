import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountriesStart } from "./redux/actions/country.action";
import Country from "./Country";
export default function Input() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const changeInput = (event) => {
    setSearch(event.target.value);
    dispatch(searchCountriesStart(event.target.value));
  };
  return (
    <div className="col-11 ms-5">
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Enter Your Search"
          onChange={changeInput}
          value={search}
        />
      </div>
      <Country/>
    </div>
  );
}
