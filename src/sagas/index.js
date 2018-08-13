import { all } from 'redux-saga/effects';

import {
  watchRequestPosts,
  watchPostVoteScore,
  watchAddNewPostModal,
  watchAddNewPost
} from './posts';

import { watchRequestCategories } from './categories';

export default function* rootSaga() {
  yield all([
    watchRequestPosts(),
    watchPostVoteScore(),
    watchAddNewPostModal(),
    watchAddNewPost(),
    watchRequestCategories()
  ]);
}