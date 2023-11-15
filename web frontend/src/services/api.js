import axios from 'axios';

const API = axios.create({
	baseURL: import.meta.env.VITE_API_URI,
	timeout: 5000, //5s
});

export default API;
