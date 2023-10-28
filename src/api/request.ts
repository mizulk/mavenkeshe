import axios, {
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
import { userStore as useUserStore } from "@/stores/user";
import type { Result } from "./type";
import { useRouter } from "vue-router";

const service = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 5000,
});

service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const userStore = useUserStore();
		if (userStore.getToken()) {
			config.headers.token = userStore.getToken();
		}
		return config;
	},
	(e: any) => {
		return Promise.reject(e);
	}
);

service.interceptors.response.use(
	(response: AxiosResponse<Result>) => {
		const { code, msg } = response.data;
		if (code == 0 && msg == "NOT_LOGIN") {
			useRouter().push("/login");
		}
		return response;
	},
	(e: any) => {
		return Promise.reject(e);
	}
);

export default service;
