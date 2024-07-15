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

export const getNewsStart = () => ({
  type: GET_NEWS_START,
});
export const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  payload: news,
});
export const getNewsError = (error) => ({
  type: GET_NEWS_ERROR,
  payload: error,
});

export const searchNewsStart = () => ({
  type: SEARCH_NEWS_START,
});
export const searchNewsSuccess = (news) => ({
  type: SEARCH_NEWS_SUCCESS,
  payload: news,
});
export const searchNewsError = (error) => ({
  type: SEARCH_NEWS_ERROR,
  payload: error,
});

export const categoryNewsStart = (query) => ({
  type: CATEGORY_NEWS_START,
  payload: query,
});
export const categoryNewsSuccess = (news) => ({
  type: CATEGORY_NEWS_SUCCESS,
  payload: news,
});
export const categoryNewsError = (error) => ({
  type: CATEGORY_NEWS_ERROR,
  payload: error,
});

export const languageNewsStart = (lang) => ({
  type: LANGUAGE_NEWS_START,
  payload: lang,
});
export const languageNewsSuccess = (news) => ({
  type: LANGUAGE_NEWS_SUCCESS,
  payload: news,
});
export const languageNewsError = (error) => ({
  type: LANGUAGE_NEWS_ERROR,
  payload: error,
});
