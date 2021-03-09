import { call, put, takeLatest } from "redux-saga/effects";
import { callListDataError, callListDataSuccess } from "./../actions/listData";
import { getListData, deleteTodos } from "./../apis/listData";
import { STATUS_CODE } from "./../constants/api";
import * as listDataConstants from "./../constants/listData";
function* callListData(payload) {
  const { params } = payload.payload;
  const res = yield call(getListData, params);
  const { data, status } = res;
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(callListDataSuccess(data));
  } else {
    yield put(callListDataError(data));
  }
}
function* deleteTodo({ payload }) {
  const { id } = payload;
  const res = yield call(deleteTodos, { id });
  console.log(res);
}
function* rootSaga() {
  yield takeLatest(listDataConstants.CALL_LIST_DATA, callListData);
  yield takeLatest(listDataConstants.DELETE_TODO, deleteTodo);
}
export default rootSaga;
