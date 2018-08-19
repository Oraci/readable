import { call, put, takeEvery } from 'redux-saga/effects';
import { guid } from '../utils/helpers';

import { 
  fetchPosts, 
  postVotes, 
  addPost, 
  deletePost,
  fetchPostById,
  editPost
} from '../api/api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const REQUEST_POST_SCORE = 'REQUEST_POST_SCORE';
export const RECEIVE_POST_SCORE = 'RECEIVE_POST_SCORE';

export const ADD_NEW_POST = 'ADD_NEW_POST';
export const FETCH_ADD_NEW_POST = 'FETCH_ADD_NEW_POST';

export const DELETE_POST = 'DELETE_POST';
export const FETCH_DELETE_POST = 'FETCH_DELETE_POST';

export const TOGGLE_ADD_POST_MODAL = 'TOGGLE_ADD_POST_MODAL';
export const WATCH_TOGGLE_ADD_POST_MODAL = 'WATCH_TOGGLE_ADD_POST_MODAL';

export const TOGGLE_EDIT_POST_MODAL = 'TOGGLE_EDIT_POST_MODAL';
export const WATCH_TOGGLE_EDIT_POST_MODAL = 'WATCH_TOGGLE_EDIT_POST_MODAL';

export const FETCH_EDIT_POST = 'FETCH_EDIT_POST';
export const FETCH_POST = 'FETCH_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const EDIT_POST = 'EDIT_POST';

export const WATCH_FILTER_POSTS = 'WATCH_FILTER_POSTS';
export const FILTER_POSTS = 'FILTER_POSTS';

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

function* deletePostById({ post }) {
  const deleted = yield call(deletePost, post);

  yield put({ type: DELETE_POST, deleted });
}

function* toggleEditModal({post}) {
  yield put({ type: TOGGLE_EDIT_POST_MODAL, post });
}

function* fetchPost({ postId }) {
  const post = yield call(fetchPostById, postId);

  yield put({ type: RECEIVE_POST, post});
}

function* editPostById({ postId, details }) {
  const edited = yield call(editPost, postId, details);

  yield put({ type: EDIT_POST, edited });
}

function* filterPosts({filter}) {
  yield put({ type: FILTER_POSTS, filter });
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

export function* watchDeletePost() {
  yield takeEvery(FETCH_DELETE_POST, deletePostById);
}

export function* watchEditPostModal() {
  yield takeEvery(WATCH_TOGGLE_EDIT_POST_MODAL, toggleEditModal);
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POST, fetchPost);
}

export function* watchEditPost() {
  yield takeEvery(FETCH_EDIT_POST, editPostById);
}

export function* watchFilterPosts() {
  yield takeEvery(WATCH_FILTER_POSTS, filterPosts);
}