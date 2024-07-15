export const getNewsFromApi = async (query = "all") => {
  let response = await fetch(
    // `https://newsapi.org/v2/everything?q=${query}&apiKey=e71889ec063e48768a0f86a37572f7f9`
    `https://newsdata.io/api/1/latest?apikey=pub_47620dbc53515068ff3cf2ec7a9a8e500e246&q=${query}`
  );
  let data = await response.json();
  // if (data.status === "ok") {
  //   return data.articles;
  // }
  if (data.status === "success") {
    return data.results;
  }
  return [];
};
export const languageNewsFromApi = async (lang = "en") => {
  let response = await fetch(
    // `https://newsapi.org/v2/everything?q='all'&language=${lang}&apiKey=e71889ec063e48768a0f86a37572f7f9`
    `https://newsdata.io/api/1/latest?apikey=pub_47620dbc53515068ff3cf2ec7a9a8e500e246&language=${lang}`
  );
  let data = await response.json();
  // if (data.status === "ok") {
  //   return data.articles;
  // }
  if (data.status === "success") {
    return data.results;
  }
  return [];
};
