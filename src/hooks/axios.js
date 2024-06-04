import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.draxterindustry.com/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true
});

export default api;
