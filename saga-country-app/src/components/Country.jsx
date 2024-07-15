import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesStart } from "./redux/actions/country.action";

export default function Country() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const countries = useSelector((state) => state.countries.countries);
  const searchCountries = useSelector(
    (state) => state.countries.searchCountries
  );

  const getCountry = useCallback(() => {
    dispatch(getCountriesStart());
  }, [dispatch]);
  useEffect(() => {
    getCountry();
  }, [getCountry]);

  if (loading) {
    return (
      <>
        <div className="spinner-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  if (searchCountries.length > 0) {
    return (
      <div className="row">
        {searchCountries.length > 0 &&
          searchCountries.map((country, index) => (
            <div className="col-sm-3 mb-3" key={index}>
              <div className="card">
                <img
                  src={country.flags.svg}
                  className="card-img-top"
                  alt={`flag of ${country.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {country.name.common}
                  </h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className="row">
      {countries.length > 0 &&
        countries.map((country, index) => (
          <div className="col-sm-3 mb-3" key={index}>
            <div className="card">
              <img
                src={country.flags.svg}
                className="card-img-top"
                alt={`flag of ${country.name}`}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {country.name.common}
                </h5>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
