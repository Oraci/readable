const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

const post = (path: string, params: Object) =>
  fetch(`${api}${path}`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...params }),
  });

export const fetchCategories = () =>
  fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data.categories);

export const fetchPosts = (category: string) =>
  fetch(`${api}${category ? `/${category}/posts` : '/posts'}`, {headers})
    .then(res => res.json())
    .then(data => data);

export const addPost = (newPost: Post) =>
  post('/posts', newPost)
    .then(res => res.json())
    .then(data => data);

export const postVotes = (postId: string, option: string) =>
  post(`/posts/${postId}`, { option })
    .then(res => res.json())
    .then(data => data);
  