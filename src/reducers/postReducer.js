import {RECEIVE_POSTS} from '../actions/types';

function posts(state = [], action) {
  const {type, posts} = action;

  switch (type) {
    case RECEIVE_POSTS:
      return posts.filter( p => !p.deleted);
    default:
      return state;
  }
}

export default posts;