import {
  GET_COUNTRIES_START,
  GET_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_START,
  SEARCH_COUNTRIES_SUCCESS,
} from "../constants/country.constant";

const initialState = {
  countries: [],
  searchCountries: [],
  loading: false,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_START:
    case SEARCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: [...action.payload],
        loading: false,
      };
    case SEARCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        searchCountries: [...action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
