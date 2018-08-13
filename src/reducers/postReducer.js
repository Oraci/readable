import {RECEIVE_POSTS, RECEIVE_POST_SCORE, TOGGLE_ADD_POST_MODAL, ADD_NEW_POST} from '../sagas/posts';

const initialState = {
  posts: [],
  showNewPostModal: false,
  showEditPostModal: false,
};

function posts(state = initialState, action) {
  const {type, posts, voted, added} = action;

  switch (type) {
    case RECEIVE_POSTS:
      return Object.assign({...state, posts: [...posts]});

    case RECEIVE_POST_SCORE:
      const newPosts = state.posts.map(p => {
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
        posts: [...newPosts]
      });

    case TOGGLE_ADD_POST_MODAL:
      return Object.assign({
        ...state, 
        showNewPostModal: !state.showNewPostModal
      });

    case ADD_NEW_POST:
      return Object.assign({
        ...state, 
        posts: [...state.posts, added],
        showNewPostModal: false
      });
    default:
      return state;
  }
}

export default posts;