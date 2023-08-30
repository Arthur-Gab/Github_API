import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:7878",
});

export default API;
