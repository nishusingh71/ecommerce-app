import { takeLatest, put } from "redux-saga/effects";
import {
  GET_NEWS_START,
  SEARCH_NEWS_START,
  CATEGORY_NEWS_START,
  LANGUAGE_NEWS_START,
} from "../constants/news.constant";
import { getNewsFromApi, languageNewsFromApi } from "../services/news.service";
import {
  categoryNewsError,
  categoryNewsSuccess,
  getNewsError,
  getNewsSuccess,
  languageNewsError,
  languageNewsSuccess,
  searchNewsError,
  searchNewsSuccess,
} from "../actions/news.action";
function* getNews() {
  try {
    let newsData = yield getNewsFromApi();
    yield put(getNewsSuccess(newsData));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}
function* searchNews({ payload }) {
  try {
    let searchNewsData = yield getNewsFromApi(payload);
    yield put(searchNewsSuccess(searchNewsData));
  } catch (error) {
    yield put(searchNewsError(error.message));
  }
}
function* getNewsLanguage({ payload }) {
  try {
    let lang = yield languageNewsFromApi(payload);
    yield put(languageNewsSuccess(lang));
  } catch (error) {
    yield put(languageNewsError(error.message));
  }
}
function* categoryNews({ payload }) {
  try {
    let newsCategoryData = yield getNewsFromApi(payload);
    yield put(categoryNewsSuccess(newsCategoryData));
  } catch (error) {
    yield put(categoryNewsError(error.message));
  }
}
export default function* News() {
  yield takeLatest(GET_NEWS_START, getNews);
  yield takeLatest(SEARCH_NEWS_START, searchNews);
  yield takeLatest(CATEGORY_NEWS_START, categoryNews);
  yield takeLatest(LANGUAGE_NEWS_START, getNewsLanguage);
}
