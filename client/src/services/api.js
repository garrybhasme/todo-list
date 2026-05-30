import axios from 'axios';
const API=axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

export const getAllTasks = () => API.get("/tasks");
export const createNewtask = (text) => API.post("/tasks",{text});
export const toggleTask = (id) => API.patch(`/tasks/${id}`);
export const updateTask = (id, text) => API.put(`/tasks/${id}`,{text});
export const deleteTask = (id) => API.delete(`/tasks/${id}`);