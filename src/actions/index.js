import * as ACTIONS from './types';

export const receiveCategories = (categories) => ({
  type: ACTIONS.RECEIVE_CATEGORIES,
  categories
});

export const requestCategories = () => ({
  type: ACTIONS.REQUEST_CATEGORIES
});

export const receivePosts = (posts) => ({
  type: ACTIONS.RECEIVE_POSTS,
  posts
});

export const requestPosts = (category) => ({
  type: ACTIONS.REQUEST_POSTS,
  category
});