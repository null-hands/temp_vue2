import request from "@/utils/request";

export function registerApi(data) {
  return request.post("/api/v1/user/register", data);
}

export function loginApi(params) {
  return request.get("/api/v1/user/login", { params });
}
