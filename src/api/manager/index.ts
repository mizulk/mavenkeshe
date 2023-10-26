import requset from "../request";
import type { ManagerLoginForm } from "./type";

export function managerLogin(data: ManagerLoginForm) {
	return requset({
		url: "manager-login",
		method: "post",
		data,
	});
}
