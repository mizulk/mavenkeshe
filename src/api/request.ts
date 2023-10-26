import axios from "axios";
import router from "@/router";

const service = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 5000,
});

export default service;
