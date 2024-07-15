export const getCountriesFromApi = async () => {
  let response = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`
  );
  let data = await response.json();
  return data;
};

export const searchCountriesFromApi = async (query) => {
  let response = await fetch(
    `https://restcountries.com/v3.1/name/${query}?fields=name,flags`
  );
  let data = await response.json();
  if (data.message) {
    return [];
  }
  return data;
};
