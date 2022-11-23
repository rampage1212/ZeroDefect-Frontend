import axios from "axios";
import authHeader from "./auth-header";
import { authCreateHeader } from "./author-CreateHeader";

const API_URL = "http://localhost:3000/api/v1/task/";

const createNewTask = (data) => {
  return axios.post(API_URL, data, { headers: authCreateHeader() });
};
const getTaskList = () => {
  return axios.get(API_URL, { headers: authHeader() });
};
const getTaskDetail = (id) => {
  return axios.get(API_URL + "detail?taskId=" + id, { headers: authHeader() });
};
const updateTask = (data) => {
  return axios.put(`${API_URL}:${data.id}`, data, {
    headers: authCreateHeader(),
  });
};
const getDeleteTask = (id) => {
  return axios.delete(`${API_URL}:${id}`, { headers: authHeader() });
};
export default {
  createNewTask,
  getTaskList,
  getTaskDetail,
  updateTask,
  getDeleteTask,
};
