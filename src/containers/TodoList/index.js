import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import * as actionListTask from "../../actions/listData";
import ListItems from "../../components/ListItems";

function TodoList(props) {
  const dispatch = useDispatch();

  const { listData } = useSelector((state) => state.listData);

  const LoadData = () => {
    dispatch(actionListTask.callListData());
  };

  const renderCardNoComplete = (listData, status) => {
    let xhtml = null;
    if (listData !== null) {
      xhtml = listData.map((list, key) => {
        if (list.status === status) {
          return <ListItems list={list} />;
        } else return null;
      });
      return xhtml;
    }
  };

  const addData = () => {
    const title = "title";
    dispatch(actionListTask.addData(title));
  };
  return (
    <div className="header">
      <button className="header__btnAdd" onClick={addData}>
        Thêm mới công việc
      </button>
      <button className="header__btnAdd" onClick={LoadData}>
        Load data
      </button>
      <p className="header__title">Công việc</p>
      <div className="header__data">
        <div className="header__data-col">
          <p className="title">Chưa hoàn thành</p>
          {renderCardNoComplete(listData, 0)}
        </div>
        <div className="header__data-col">
          <p className="title">Đã hoàn thành</p>
          {renderCardNoComplete(listData, 1)}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
