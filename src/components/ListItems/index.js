import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionListTask from "./../../actions/listData";

import "./style.scss";
function ListItems(props) {
  const dispatch = useDispatch();
  let openform = useSelector((state) => state.listData.openform);

  const { list } = props;

  const DeleleItem = (list) => {
    dispatch(actionListTask.deleleTodo(list));
  };
  const EditItems = (list) => {
    openform = true;
    const title = "edit"
    dispatch(actionListTask.editTodo(openform, list, title));
  };

  return (
    <div className="card1" key={list.title}>
      <p>{list.title}</p>
      <div className="card1-icon">
        <i
          className="fas fa-edit icon__edit"
          onClick={() => {
            EditItems(list);
          }}
        ></i>
        <i
          className="fas fa-trash icon__delete"
          onClick={() => DeleleItem(list)}
        ></i>
      </div>
      <div className="clearfix" />
    </div>
  );
}

export default ListItems;
