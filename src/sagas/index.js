import { all } from 'redux-saga/effects';

import {
  watchRequestPosts,
  watchPostVoteScore  
} from './posts';

import { watchRequestCategories } from './categories';

export default function* rootSaga() {
  yield all([
    watchRequestPosts(),
    watchPostVoteScore(),
    watchRequestCategories()
  ]);
}