import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCategories } from '../api/api';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

function* requestCategories() {
  try {
    const categories = yield call(fetchCategories);
    yield put({type : RECEIVE_CATEGORIES, categories});
  } catch(e) {
    console.log(e);
  }
}

export function* watchRequestCategories() {
  yield takeEvery(REQUEST_CATEGORIES, requestCategories);
}