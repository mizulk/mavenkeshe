import LoginViewVue from "@/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/login"
		},
		{
			path: "/login",
			name: "login",
			component: LoginViewVue,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/register",
			name: "注册",
			component: () => import("../views/RegisterView.vue")
		},
	],
});

export default router;
