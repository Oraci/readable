import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchComments} from '../api/api';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

function* requestComments({post}) {
  const comments = yield call(fetchComments, post);

  yield put({type: RECEIVE_COMMENTS, comments});
}

export function* watchRequestComments() {
  yield takeEvery(REQUEST_COMMENTS, requestComments);
}