import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import * as actionListTask from "./../../actions/listData";
import ListItems from "../../components/ListItems";


function TodoList(props) {
  const dispatch = useDispatch();

  const { listData } = useSelector((state) => state.listData);

  const LoadData = () => {
    dispatch(actionListTask.callListData());
  };
  const renderCardComplete = (listData) => {
    let xhtml = null;
    if (listData) {
      xhtml = listData.map((list, key) => {
        if (list.status === 1) {
          return <ListItems list={list} key={list.title} />;
        } else {
          return null;
        }
      });
    }

    return xhtml;
  };

  const DeleleItem = (list) => {
    dispatch(actionListTask.deleleTodo(list));
  };
  const renderCardNoComplete = (listData) => {
    let xhtml = null;
    if (listData) {
      xhtml = listData.map((list) => {
        if (list.status === 0) {
          return (
            <div className="card" key={list.title}>
              <p>{list.title}</p>
              <div className="card-icon">
                <i className="fas fa-edit icon__edit"></i>
                <i
                  className="fas fa-trash icon__delete"
                  onClick={() => DeleleItem(list)}
                ></i>
              </div>
              <div className="clearfix" />
            </div>
          );
        } else {
          return null;
        }
      });
    }

    return xhtml;
  };

  return (
    <div className="header">
      <button className="header__btnAdd">Thêm mới công việc</button>
      <button className="header__btnAdd" onClick={LoadData}>
        Load data
      </button>
      <p className="header__title">Công việc</p>
      <div className="header__data">
        <div className="header__data-col">
          <p className="title">Chưa hoàn thành</p>

          {renderCardNoComplete(listData)}
        </div>
        <div className="header__data-col">
          <p className="title">Đã hoàn thành</p>

          {renderCardComplete(listData)}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
