import api from "./api";

export const getUser = () => api.get("/users/me");
