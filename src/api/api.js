import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) => axios.post(`${url}/login`, user);
export const getUser = (id) => axios.get(`${url}/users/${id}`, id);
export const updateUser = (user, id) => axios.patch(`${url}/users/${id}`, user);

export const getPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`, id);

export const likePost = (like) => axios.post(`${url}/likes`, like);
export const getLikes = () => axios.get(`${url}/likes`);
