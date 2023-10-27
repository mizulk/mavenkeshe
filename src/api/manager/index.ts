import requset from "../request";
import type { ManagerLoginForm } from "./type";

export function managerLogin(data: ManagerLoginForm) {
	return requset({
		url: "/manger-login",
		method: "post",
		data,
	});
}
