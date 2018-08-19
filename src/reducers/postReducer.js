import {
  RECEIVE_POSTS, 
  RECEIVE_POST_SCORE, 
  TOGGLE_ADD_POST_MODAL,
  TOGGLE_EDIT_POST_MODAL,
  ADD_NEW_POST,
  DELETE_POST,
  RECEIVE_POST,
  EDIT_POST,
  FILTER_POSTS
} from '../sagas/posts';

const initialState = {
  posts: [],
  post: {},
  showNewPostModal: false,
  showEditPostModal: false
};

function posts(state = initialState, action) {
  const {type, posts, post, voted, added, deleted, edited, filter} = action;

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

    case TOGGLE_EDIT_POST_MODAL:
      return Object.assign({
        ...state,
        post: {...post},
        showEditPostModal: !state.showEditPostModal
      });

    case RECEIVE_POST:
      return Object.assign({
        ...state,
        post: {...post}
      });

    case ADD_NEW_POST:
      return Object.assign({
        ...state, 
        posts: [...state.posts, added],
        showNewPostModal: false
      });

    case DELETE_POST:
      return Object.assign({
        ...state,
        posts: [...state.posts.filter(post => post.id !== deleted.id)]
      });

    case EDIT_POST:
      const editPost = state.posts.map(p => {
        if (p.id !== edited.id) {
          return p;
        }
        return {
          ...edited
        }
      }) || [];

      return Object.assign({
        ...state,
        post: {...editPost},
        posts: [...editPost],
        showEditPostModal: false
      });

    case FILTER_POSTS:
      const sorted = [...state.posts];

      const sortFn = key => (x, y) => x[key] < y[key];
      sorted.sort(sortFn(filter));

      return {
        ...state,
        posts: [...sorted],
      };    

    default:
      return state;
  }
}

export default posts;