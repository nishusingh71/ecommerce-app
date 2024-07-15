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
interface NewsActionInterface {
  type: string;
  payload: any;
}
export interface NewsInitialStateInterface {
  news: any[];
  categoryNews: any[];
  categories: string[];
  searchNews: any[];
  languages: string[];
  newsLanguage: any[];
}
const intialState: NewsInitialStateInterface = {
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
};

export const newsReducer = (
  state = intialState,
  action: NewsActionInterface
) => {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
      };

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: [...action.payload],
      };

    case GET_NEWS_ERROR:
      return {
        ...state,
        news: [...action.payload],
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
      };
    case CATEGORY_NEWS_START:
      return {
        ...state,
        categoryNews: [...action.payload],
      };
    case CATEGORY_NEWS_SUCCESS:
      return {
        ...state,
        categoryNews: [...action.payload],
      };
    case CATEGORY_NEWS_ERROR:
      return {
        ...state,
        categoryNews: [...action.payload],
      };
    case LANGUAGE_NEWS_START:
      return {
        ...state,
        newsLanguage: [...action.payload],
      };
    case LANGUAGE_NEWS_SUCCESS:
      return {
        ...state,
        newsLanguage: [...action.payload],
      };
    case LANGUAGE_NEWS_ERROR:
      return {
        ...state,
        newsLanguage: [...action.payload],
      };
    default:
      return state;
  }
};
