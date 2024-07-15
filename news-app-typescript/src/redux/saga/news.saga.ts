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
interface NewsInterface {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
function* getNews() {
  try {
    let newsData: NewsInterface[] = yield getNewsFromApi();
    yield put(getNewsSuccess(newsData));
  } catch (error: any) {
    yield put(getNewsError(error.message));
  }
}
function* searchNews({ payload }: { type: string; payload: string }) {
  try {
    let searchNewsData: NewsInterface[] = yield getNewsFromApi(payload);
    yield put(searchNewsSuccess(searchNewsData));
  } catch (error: any) {
    yield put(searchNewsError(error.message));
  }
}
function* getNewsLanguage({ payload }: { type: string; payload: string }) {
  try {
    let lang: NewsInterface[] = yield languageNewsFromApi(payload);
    yield put(languageNewsSuccess(lang));
  } catch (error: any) {
    yield put(languageNewsError(error.message));
  }
}
function* categoryNews({ payload }: { type: string; payload: string }) {
  try {
    let newsCategoryData: NewsInterface[] = yield getNewsFromApi(payload);
    yield put(categoryNewsSuccess(newsCategoryData));
  } catch (error: any) {
    yield put(categoryNewsError(error.message));
  }
}
export default function* News() {
  yield takeLatest(GET_NEWS_START, getNews);
  yield takeLatest(SEARCH_NEWS_START, searchNews);
  yield takeLatest(CATEGORY_NEWS_START, categoryNews);
  yield takeLatest(LANGUAGE_NEWS_START, getNewsLanguage);
}
