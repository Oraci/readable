import {RECEIVE_COMMENTS} from '../sagas/comments';

const initialState = {
  comments: [],
  showEditCommentModal: false,
  showAddNewCommentModal: false
}

function comments(state = initialState, action) {
  const {type, comments} = action;

  switch (type) {
    case RECEIVE_COMMENTS:
      return Object.assign({
        ...state, 
        comments: [...comments]
      });

    default:
      return state;
  }
}

export default comments;