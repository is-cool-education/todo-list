import api from "./api";

export const createTask = (task) => api.post("/tasks", task);
