import {combineReducers} from 'redux';
import * as ACTIONS from '../actions/types';

function categories(state = [], action) {
  switch (action.type) {
    case ACTIONS.RECEIVE_CATEGORIES:
      return [ 
        ...state, 
        ...action.categories
      ]
    default:
      return state;
  }
}

function posts(state = {}, action) {
  const {type, posts} = action;

  switch (type) {
    case ACTIONS.RECEIVE_POSTS:
      if (posts) {
        return posts.reduce((obj, p) => {
          obj[p.id] = p;
          return obj;
        }, {})
      }

      return state;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});