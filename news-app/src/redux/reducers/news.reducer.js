import {
  CATEGORY_NEWS_ERROR,
  CATEGORY_NEWS_START,
  CATEGORY_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  GET_NEWS_START,
  GET_NEWS_SUCCESS,
  LANGUAGE_NEWS_ERROR,
  LANGUAGE_NEWS_START,
  LANGUAGE_NEWS_SUCCESS,
  SEARCH_NEWS_ERROR,
  SEARCH_NEWS_START,
  SEARCH_NEWS_SUCCESS,
} from "../constants/news.constant";

const intialState = {
  news: [],
  searchNews: [],
  categories: ["Tech", "Science", "Sports", "Finance", "Entertainment"],
  categoryNews: [],
  languages: [
    "en",
    "hi",
    "ar",
    "de",
    "es",
    "fr",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "sv",
    "ud",
    "zh",
  ],
  newsLanguage: [],
  loading: false,
};

export const newsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
        loading: true,
      };

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: [...action.payload],
        loading: false,
      };

    case GET_NEWS_ERROR:
      return {
        ...state,
        news: [...action.payload],
        loading: true,
      };

    case SEARCH_NEWS_START:
      return {
        ...state,
      };
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        searchNews: [...action.payload],
      };
    case SEARCH_NEWS_ERROR:
      return {
        ...state,
        searchNews: [...action.payload],
        loading: false,
      };
    case CATEGORY_NEWS_START:
      return {
        ...state,
        categoryNews: [...action.payload],
        loading: true,
      };
    case CATEGORY_NEWS_SUCCESS:
      return {
        ...state,
        categoryNews: [...action.payload],
        loading: false,
      };
    case CATEGORY_NEWS_ERROR:
      return {
        ...state,
        categoryNews: [...action.payload],
        loading: true,
      };
    case LANGUAGE_NEWS_START:
      return {
        ...state,
        newsLanguage: [...action.payload],
        loading: true,
      };
    case LANGUAGE_NEWS_SUCCESS:
      return {
        ...state,
        newsLanguage: [...action.payload],
        loading: false,
      };
    case LANGUAGE_NEWS_ERROR:
      return {
        ...state,
        newsLanguage: [...action.payload],
        loading: true,
      };
    default:
      return state;
  }
};
