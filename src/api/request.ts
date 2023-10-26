import axios from "axios";
import router from "@/router";

const service = axios.create({
	baseURL: import.meta.env.VUE_APP_URL,
	timeout: 5000,
});

export default service;
