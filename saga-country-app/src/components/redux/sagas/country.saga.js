import {put, takeLatest } from "redux-saga/effects";
import { GET_COUNTRIES_START, SEARCH_COUNTRIES_START } from "../constants/country.constant";
import { getCountriesFromApi,searchCountriesFromApi } from "../services/country.service";
import { getCountriesSuccess, searchCountriesSuccess } from "../actions/country.action";
function* getCountry() {
  let countries = yield getCountriesFromApi();
  yield put(getCountriesSuccess(countries));
}
function* searchCountry({payload}) {
  let countries = yield searchCountriesFromApi(payload);
  yield put(searchCountriesSuccess(countries));
}
export default function* country() {
  yield takeLatest(GET_COUNTRIES_START, getCountry);
  yield takeLatest(SEARCH_COUNTRIES_START, searchCountry);
}
