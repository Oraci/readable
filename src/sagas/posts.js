import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPosts, postVotes } from '../api/api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST_SCORE = 'REQUEST_POST_SCORE';
export const RECEIVE_POST_SCORE = 'RECEIVE_POST_SCORE';

function* requestPosts({category}) {
  try {
    const posts = yield call(fetchPosts, category);
    yield put({type: RECEIVE_POSTS, posts});
  } catch(e) {
    console.log(e);
  }
}

function* voteScore({ postId, option }) {
  try {
    const voted = yield call(postVotes, postId, option);
    yield put({ type: RECEIVE_POST_SCORE, voted });  
  } catch(e) {
    console.log(e);
  }
}

export function* watchRequestPosts() {
  yield takeEvery(REQUEST_POSTS, requestPosts);
}

export function* watchPostVoteScore() {
  yield takeEvery(REQUEST_POST_SCORE, voteScore);
}
