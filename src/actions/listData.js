import * as listDataConstants from "./../constants/listData";
export const callListData = (params = {}) => {
  return {
    type: listDataConstants.CALL_LIST_DATA,
    payload: {
      params,
    },
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
