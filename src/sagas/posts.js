import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPosts, postVotes, addPost } from '../api/api';
import { guid } from '../utils/helpers';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST_SCORE = 'REQUEST_POST_SCORE';
export const RECEIVE_POST_SCORE = 'RECEIVE_POST_SCORE';

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const FETCH_ADD_NEW_POST = 'FETCH_ADD_NEW_POST';


export const TOGGLE_ADD_POST_MODAL = 'TOGGLE_ADD_POST_MODAL';

export const WATCH_TOGGLE_ADD_POST_MODAL = 'WATCH_TOGGLE_ADD_POST_MODAL';

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

function* addNewPost({ post }) {
  const newPost = {
    ...post,
    id: guid(),
    voteScore: 0,
    timestamp: (+ new Date()), //eslint-disable-line
  };

  const added = yield call(addPost, newPost);

  yield put({ type: ADD_NEW_POST, added });
}

function* toggleAddPostModal() {
  yield put({ type: TOGGLE_ADD_POST_MODAL });
}

export function* watchRequestPosts() {
  yield takeEvery(REQUEST_POSTS, requestPosts);
}

export function* watchPostVoteScore() {
  yield takeEvery(REQUEST_POST_SCORE, voteScore);
}

export function* watchAddNewPost() {
  yield takeEvery(FETCH_ADD_NEW_POST, addNewPost);
}

export function* watchAddNewPostModal() {
  yield takeEvery(WATCH_TOGGLE_ADD_POST_MODAL, toggleAddPostModal);
}