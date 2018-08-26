import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT_SCORE,
  DELETE_COMMENT,
  EDIT_COMMENT,
  TOGGLE_ADD_COMMENT_MODAL,
  TOGGLE_EDIT_COMMENT_MODAL,
  ADD_NEW_COMMENT
} from '../sagas/comments';

const initialState = {
  comments: [],
  showAddNewCommentModal: false,
  showEditCommentModal: false
}

function comments(state = initialState, action) {
  const {type, comments, voted, deleted, edited, comment, added} = action;

  switch (type) {
    case RECEIVE_COMMENTS:
      return Object.assign({
        ...state, 
        comments: [...comments]
      });
    
    case RECEIVE_COMMENT_SCORE:
      const newComments = state.comments.map(p => {
        if (p.id !== voted.id) {
          return p;
        }
        return {
          ...p,
          voteScore: voted.voteScore
        }
      }) || [];

      return Object.assign({
        ...state, 
        comments: [...newComments]
      });      

    case DELETE_COMMENT:
      return Object.assign({
        ...state,
        comments: [...state.comments.filter(comment => comment.id !== deleted.id)]
      });

    case EDIT_COMMENT:
      const editComment = state.comments.map(p => {
        if (p.id !== edited.id) {
          return p;
        }
        return {
          ...edited
        }
      }) || [];

      return Object.assign({
        ...state,
        comment: {...edited},
        comments: [...editComment],
        showEditCommentModal: false
      });

    case ADD_NEW_COMMENT:
      return Object.assign({
        ...state, 
        comments: [...state.comments, added],
        showAddNewCommentModal: false
      });


    case TOGGLE_ADD_COMMENT_MODAL:
      return Object.assign({
        ...state, 
        showAddNewCommentModal: !state.showAddNewCommentModal
      });

    case TOGGLE_EDIT_COMMENT_MODAL:
      return Object.assign({
        ...state,
        comment: {...comment},
        showEditCommentModal: !state.showEditCommentModal
      });      

    default:
      return state;
  }
}

export default comments;