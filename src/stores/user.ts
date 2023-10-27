import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("user", () => {
	const token = ref("");
	const userId = ref<number>(0);
	const userName = ref<string>("");

	function getToken() {
		return token.value;
	}

	function setToken(newToken: string) {
		token.value = newToken;
		const userInfor: string = newToken.split(".")[1];
		const s = JSON.parse(window.decodeURIComponent(window.atob(userInfor)));
		userId.value = s.id;
		userName.value = s.username;
	}
	return {
		getToken,
		setToken,
		userId,
		userName,
	};
});
