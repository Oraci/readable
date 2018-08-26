import { all } from 'redux-saga/effects';

import {
  watchRequestPosts,
  watchPostVoteScore,
  watchAddNewPostModal,
  watchEditPostModal,
  watchAddNewPost,
  watchDeletePost,
  watchFetchPost,
  watchFilterPosts,
  watchEditPost
} from './posts';

import {watchRequestCategories} from './categories';

import {
  watchRequestComments,
  watchCommentsVoteScore,
  watchDeleteComment,
  watchEditCommentModal,
  watchAddNewCommentModal,
  watchAddComment,
  watchEditComment
} from './comments';

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
    watchFilterPosts(),
    watchRequestCategories(),
    watchRequestComments(),
    watchCommentsVoteScore(),
    watchDeleteComment(),
    watchEditCommentModal(),
    watchAddNewCommentModal(),
    watchAddComment(),
    watchEditComment()
  ]);
}