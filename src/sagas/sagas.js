import {all, fork, call, put, takeLatest} from 'redux-saga/effects';
import {receiveCategories, receivePosts} from '../actions';
import * as ACTIONS from '../actions/types';
import * as API from '../api/api';

function* requestCategories() {
  try {
    const data = yield call(API.fetchCategories);
    yield put(receiveCategories(data));
  } catch(e) {
    console.log(e);
  }
}

function* requestCategoriesSaga() {
  yield takeLatest(ACTIONS.REQUEST_CATEGORIES, requestCategories);
}

function* requestPosts() {
  try {
    const data = yield call(API.fetchPosts);
    yield put(receivePosts(data));
  } catch(e) {
    console.log(e);
  }
}

function* requestPostsSaga() {
  yield takeLatest(ACTIONS.REQUEST_POSTS, requestPosts);
}

export default function* rootSaga() {
  yield all([
    fork(requestCategoriesSaga),
    fork(requestPostsSaga)
  ]);
}