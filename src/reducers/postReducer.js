import {RECEIVE_POSTS, RECEIVE_POST_SCORE} from '../sagas/posts';

function posts(state = [], action) {
  const {type, posts, voted} = action;

  switch (type) {
    case RECEIVE_POSTS:
      return posts && posts.filter( p => !p.deleted) || state;

    case RECEIVE_POST_SCORE:
      return state.map(p => {
        if (p.id !== voted.id) {
          return p;
        }
        return {
          ...p,
          voteScore: voted.voteScore
        }
      });
    default:
      return state;
  }
}

export default posts;