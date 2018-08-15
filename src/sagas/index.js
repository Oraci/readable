import { all } from 'redux-saga/effects';

import {
  watchRequestPosts,
  watchPostVoteScore,
  watchAddNewPostModal,
  watchEditPostModal,
  watchAddNewPost,
  watchDeletePost,
  watchFetchPost,
  watchEditPost
} from './posts';

import { watchRequestCategories } from './categories';

export default function* rootSaga() {
  yield all([
    watchRequestPosts(),
    watchPostVoteScore(),
    watchAddNewPostModal(),
    watchEditPostModal(),
    watchAddNewPost(),
    watchDeletePost(),
    watchFetchPost(),
    watchEditPost(),
    watchRequestCategories()
  ]);
}