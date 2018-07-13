import {RECEIVE_POSTS} from '../actions/types';

function posts(state = [], action) {
  const {type, posts} = action;

  switch (type) {
    case RECEIVE_POSTS:
      return [...state, ...posts];
    default:
      return state;
  }
}

export default posts;