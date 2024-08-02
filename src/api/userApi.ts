import api from "./api";

export const userApi = {
  getLoginUser: async () => api.get("/api/member/loginUser"),
};
