import api from "./api";

export const createTask = (task) => api.post("/tasks", task);

export const editTask = (id, task) => api.patch(`/tasks/${id}`, task);

export const getTask = (id) => api.get(`/tasks/${id}`);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);
