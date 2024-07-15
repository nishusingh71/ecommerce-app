import { GET_COUNTRIES, SEARCH_COUNTRIES } from "../constants/country.constant";

const initialState = {
  countries: [],
  searchCountries: [],
  totalItems: 0,
  currentPage: 1,
  itemsPerPage: 10,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload],
        totalItems: action.payload.totalItems,
        currentPage: action.payload.page,
        itemsPerPage: action.payload.itemsPerPage,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchCountries: [...action.payload],
      };

    default:
      return state;
  }
};
