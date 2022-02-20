import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getUsers = () => axios.get(`${url}/users`);
export const registerUser = (newUser) => axios.post(`${url}/register`, newUser);
