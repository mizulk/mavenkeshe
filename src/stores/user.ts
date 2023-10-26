import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("user", () => {
	const token = ref("");

	function getToken() {
		return token.value;
	}

	function setToken(newToken: string) {
		token.value = newToken;
	}
	return {
		getToken,
		setToken,
	};
});
