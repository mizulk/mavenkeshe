import LoginViewVue from "@/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/login",
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
			component: () => import("../views/RegisterView.vue"),
		},
		{
			path: "/user",
			name: "用户主页面",
			component: () => import("../views/UserMainView.vue"),
		},
		{
			path: "/manager-login",
			name: "管理员登录",
			component: () => import("../views/manager/ManageLoginView.vue"),
		},
		{
			path: "/manger",
			name: "管理员主页面",
			component: () => import("../views/manager/ManagerView.vue"),
			children: [
				{
					path: "users",
					name: "管理员-用户",
					component: () =>
						import("../views/manager/ManageUserView.vue"),
				},
				{
					path: "goods",
					name: "管理员-商品",
					component: () =>
						import("../views/manager/ManagerGoodsView.vue"),
				},
				{
					path: "orders",
					name: "管理员-订单",
					component: () =>
						import("../views/manager/ManageOrderView.vue"),
				},
			],
		},
	],
});

export default router;
