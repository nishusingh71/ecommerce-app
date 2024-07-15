import {
  GET_COUNTRIES_ERROR,
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_ERROR,
  SEARCH_COUNTRIES_START,
  SEARCH_COUNTRIES_SUCCESS,
} from "../constants/country.constant";
export const getCountriesStart = () => ({
  type: GET_COUNTRIES_START,
});
export const getCountriesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: countries,
});

export const getCountriesError = (error) => ({
  type: GET_COUNTRIES_ERROR,
  payload: error,
});

export const searchCountriesStart = (query) => ({
  type: SEARCH_COUNTRIES_START,
  payload: query,
});

export const searchCountriesSuccess = (countries) => ({
  type: SEARCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const searchCountriesError = (error) => ({
  type: SEARCH_COUNTRIES_ERROR,
  payload: error,
});
