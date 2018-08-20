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

const del = (path: string) =>
  fetch(`${api}${path}`, {
    method: 'DELETE',
    headers,
  });

const put = (path: string, params: Object) =>
  fetch(`${api}${path}`, {
    method: 'PUT',
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

export const fetchPostById = (postId: string) =>
  fetch(`${api}/posts/${postId}`, {headers})
    .then(res => res.json())
    .then(data => data);

export const fetchComments = (post: string) =>
  fetch(`${api}/posts/${post}/comments`, {headers})
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
  
export const deletePost = (post: string) =>
  del(`/posts/${post}`)
    .then(res => res.json())
    .then(data => data);
  
export const editPost = (postId: string, details: PostDetails) =>
  put(`/posts/${postId}`, details)
    .then(res => res.json())
    .then(data => data);
  