import { call, put, takeLatest } from "redux-saga/effects";
import { callListDataError, callListDataSuccess } from "./../actions/listData";
import { getListData, deleteTodos } from "./../apis/listData";
import { STATUS_CODE } from "./../constants/api";
import * as listDataConstants from "./../constants/listData";
function* callListData() {
  const res = yield call(getListData);
  console.log("test",res);
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
function* rootSaga() {
  yield takeLatest(listDataConstants.CALL_LIST_DATA, callListData);
  yield takeLatest(listDataConstants.DELETE_TODO, deleteTodo);
}
export default rootSaga;
