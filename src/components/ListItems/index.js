import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actionListTask from "./../../actions/listData";

function ListItems(props) {
    const dispatch = useDispatch();
    const {list} = props;

    const DeleleItem = (list) => {
        dispatch(actionListTask.deleleTodo(list));
      };

    return (
        <div className="card" key={list.title}>
        {ListItems}
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
}

export default ListItems;