import React from "react";
import { useDispatch } from "react-redux";
import * as actionListTask from "./../../actions/listData";

function ListItems(props) {
  const dispatch = useDispatch();
  
  const { list } = props;
  

  const DeleleItem = (list) => {
    dispatch(actionListTask.deleleTodo(list));
   
  };
  function EditItems(list) {
    console.log(list);
    

  };

  return (
    <div className="card" key={list.title}>
  
      <p>{list.title}</p>
      <div className="card-icon">
        <i
          className="fas fa-edit icon__edit"
          onClick={() => {
            EditItems(list)
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
