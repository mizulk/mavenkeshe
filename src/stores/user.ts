import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("user", () => {
	const token = ref("");
	const userId = ref<number>(0);

	function getToken() {
		return token.value;
	}

	function setToken(newToken: string) {
		token.value = newToken;
	}
	return {
		getToken,
		setToken,
		userId,
	};
});
