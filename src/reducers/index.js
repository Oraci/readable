import {combineReducers} from 'redux';
import categories from './categoryReducer';
import posts from './postReducer';
import comments from './commentsReducer';

export default combineReducers({
  categories,
  posts,
  comments
});