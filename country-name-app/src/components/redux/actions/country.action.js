import { GET_COUNTRIES, SEARCH_COUNTRIES } from "../constants/country.constant";
export const getCountries = () => async (dispatch) => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );
  const data = await response.json();
  dispatch({
    type: GET_COUNTRIES,
    payload: data,
  });
};

export const searchCountries =
  (query, page = 1, itemPerPage = 10) =>
  async (dispatch) => {
    let data = [];
    if (query) {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,flags`
      );
      data = await response.json();
    }

    dispatch({
      type: SEARCH_COUNTRIES,
      payload: { data, page, itemPerPage },
    });
  };
