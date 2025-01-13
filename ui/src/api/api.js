import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(function (config) {
  const headers = {}
  const authToken = localStorage.getItem('token');

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }

  return {
    ...config,
    headers,
  }
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    location.href = '/sign-in'

  }

  return Promise.reject(error);
});


export default api;
