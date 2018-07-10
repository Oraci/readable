import {RECEIVE_POSTS} from '../actions/types';

function posts(state = {}, action) {
  const {type, posts} = action;

  switch (type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: posts.reduce((obj, p) => {
          obj[p.id] = p;
          return obj;
        }, {})
      };
    default:
      return state;
  }
}

export default posts;