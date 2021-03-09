import { API_TODOLIST } from "../constants/api";
import axiosConfig from "./configAxios";
import qr from "query-string";
const url = "todoList";
export const getListData = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qr.stringify(params)}`;
  }
  return axiosConfig.get(`${API_TODOLIST}/${url}${queryParams}`);
};
export const deleteTodos = (params = {}) => {
  return axiosConfig.delete(`${API_TODOLIST}/${url}/${params.id}`);
};
