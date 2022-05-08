import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getUsers = () => axios.get(`${url}/users`);
export const register = (newUser) => axios.post(`${url}/register`, newUser);
export const login = (user) => axios.post(`${url}/login`, user);

export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
