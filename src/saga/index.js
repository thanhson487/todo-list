import { call, put, takeLatest } from "redux-saga/effects";
import { callListDataError, callListDataSuccess } from "./../actions/listData";
import {
  getListData,
  deleteTodos,
  editTodo,
  addData,
} from "./../apis/listData";
import { STATUS_CODE } from "./../constants/api";
import * as listDataConstants from "./../constants/listData";
function* callListData() {
  const res = yield call(getListData);
  const { data } = res;
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(callListDataSuccess(data));
  } else {
    yield put(callListDataError(data));
  }
}
function* deleteTodo({ payload }) {
  const { id } = payload;
  yield call(deleteTodos, { id });
  const res = yield call(getListData);
  const { data } = res;
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(callListDataSuccess(data));
  } else {
    yield put(callListDataError(data));
  }
}
function* editTodoSuccess({ payload }) {
  const data = payload.data;
  yield call(editTodo, data);
}
function* addDataSuccess({ payload }) {
  const dataAdd = payload;
  yield call(addData, dataAdd);
  const res = yield call(getListData);
  const { data } = res;
  yield put(callListDataSuccess(data));
}
function* rootSaga() {
  yield takeLatest(listDataConstants.CALL_LIST_DATA, callListData);
  yield takeLatest(listDataConstants.DELETE_TODO, deleteTodo);
  yield takeLatest(listDataConstants.EDIT_TODO_SUCCESS, editTodoSuccess);
  yield takeLatest(listDataConstants.ADD_DATA_SUCCESS, addDataSuccess);
}
export default rootSaga;
