import axios from '../axios';

export const registerRequest = async (user) => axios.post(`/signup`, user);

export const loginRequest = async (user) => axios.post(`/secure/login`, user);

export const editUserDataRequest = async (user) =>
  axios.put(`/user/${user._id}`, user);
