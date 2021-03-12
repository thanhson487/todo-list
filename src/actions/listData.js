import * as listDataConstants from "./../constants/listData";
export const callListData = () => {
  return {
    type: listDataConstants.CALL_LIST_DATA,
  };
};
export const callListDataSuccess = (data) => {
  return {
    type: listDataConstants.CALL_LIST_DATA_SUCCESS,
    payload: data,
  };
};
export const callListDataError = (err) => {
  return {
    type: listDataConstants.CALL_LIST_DATA_FALSE,
    payload: {
      err,
    },
  };
};
export const deleleTodo = (data) => {
  return {
    type: listDataConstants.DELETE_TODO,
    payload: data,
  };
};
export const deleteTodoSuccess = (params = {}) => {
  return {
    type: listDataConstants.DELETE_TODO_SUCCESS,
    payload: {
      params,
    },
  };
};
export const editTodo = (openform, data, title) => {
  return {
    type: listDataConstants.EDIT_TODO,
    payload: { openform, data, title },
  };
};
export const editTodoSuccess = (data) => {
  return {
    type: listDataConstants.EDIT_TODO_SUCCESS,
    payload: data,
  };
};
export const addData = (title) => {
  return {
    type: listDataConstants.ADD_DATA,
    payload: title,
  };
};
export const addDataSuccess = (data) => {
  return {
    type: listDataConstants.ADD_DATA_SUCCESS,
    payload: data,
  };
};
export const closeForm = () => {
  return {
    type: listDataConstants.CLOSE_FORM,
  };
};
