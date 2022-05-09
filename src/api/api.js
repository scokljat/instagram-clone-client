import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) => axios.post(`${url}/login`, user);
export const getUser = (id) => axios.get(`${url}/users/${id}`, id);

export const getPosts = () => axios.get(url);
export const getPostsByUser = (id) => axios.get(`${url}/posted/${id}`, id);
export const createPost = (newPost) => axios.post(url, newPost);
