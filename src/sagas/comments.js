import {call, put, takeEvery} from 'redux-saga/effects';
import { guid } from '../utils/helpers';

import {
  fetchComments, 
  commentVotes,
  deleteComment,
  editComment,
  addComment
} from '../api/api';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const REQUEST_COMMENT_SCORE = 'REQUEST_COMMENT_SCORE';
export const RECEIVE_COMMENT_SCORE = 'RECEIVE_COMMENT_SCORE';

export const FETCH_DELETE_COMMENT = 'FETCH_DELETE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const EDIT_COMMENT = 'EDIT_COMMENT';
export const TOGGLE_EDIT_COMMENT_MODAL = 'TOGGLE_EDIT_COMMENT_MODAL';
export const TOGGLE_ADD_COMMENT_MODAL = 'TOGGLE_ADD_COMMENT_MODAL';

export const FETCH_EDIT_COMMENT = 'FETCH_EDIT_COMMENT';
export const WATCH_TOGGLE_EDIT_COMMENT_MODAL = 'WATCH_TOGGLE_EDIT_COMMENT_MODAL';
export const WATCH_TOGGLE_ADD_COMMENT_MODAL = 'WATCH_TOGGLE_ADD_COMMENT_MODAL';

export const FETCH_ADD_NEW_COMMENT = 'FETCH_ADD_NEW_COMMENT';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

function* requestComments({postId}) {
  const comments = yield call(fetchComments, postId);

  yield put({type: RECEIVE_COMMENTS, comments});
}

function* commentScore({ commentId, option }) {
  try {
    const voted = yield call(commentVotes, commentId, option);
    yield put({ type: RECEIVE_COMMENT_SCORE, voted });  
  } catch(e) {
    console.log(e);
  }
}

function* addNewComment({ postId, comment }) {
  const newComment = {
    ...comment,
    id: guid(),
    parentId: postId,
    timestamp: (+ new Date()), //eslint-disable-line
  };

  const added = yield call(addComment, newComment);

  yield put({ type: ADD_NEW_COMMENT, added });
}

function* deleteCommentById({comment}) {
  const deleted = yield call(deleteComment, comment);

  yield put({ type: DELETE_COMMENT, deleted });
}

function* editCommentById({commentId, details}) {
  const edited = yield call(editComment, commentId, details);

  yield put({ type: EDIT_COMMENT, edited });
}

function* toggleEditModal({comment}) {
  yield put({ type: TOGGLE_EDIT_COMMENT_MODAL, comment });
}

function* toggleAddCommentModal() {
  yield put({ type: TOGGLE_ADD_COMMENT_MODAL });
}

export function* watchRequestComments() {
  yield takeEvery(REQUEST_COMMENTS, requestComments);
}

export function* watchCommentsVoteScore() {
  yield takeEvery(REQUEST_COMMENT_SCORE, commentScore);
}

export function* watchDeleteComment() {
  yield takeEvery(FETCH_DELETE_COMMENT, deleteCommentById);
}

export function* watchEditComment() {
  yield takeEvery(FETCH_EDIT_COMMENT, editCommentById);
}

export function* watchEditCommentModal() {
  yield takeEvery(WATCH_TOGGLE_EDIT_COMMENT_MODAL, toggleEditModal);
}

export function* watchAddNewCommentModal() {
  yield takeEvery(WATCH_TOGGLE_ADD_COMMENT_MODAL, toggleAddCommentModal);
}

export function* watchAddComment() {
  yield takeEvery(FETCH_ADD_NEW_COMMENT, addNewComment);
}