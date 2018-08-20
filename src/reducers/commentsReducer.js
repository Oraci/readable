import {RECEIVE_COMMENTS} from '../sagas/comments';

function comments(state = [], action) {
  const {type, comments} = action;

  switch (type) {
    case RECEIVE_COMMENTS:
      return state;
    default:
      return state;
  }
}

export default comments;