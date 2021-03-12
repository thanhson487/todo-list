import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";
import * as actionData from "./../../actions/listData";
import getUid from "get-uid";
function FormTodo(props) {
  const data = useSelector((state) => state.listData.listEdit);
  const titleName = useSelector((state) => state.listData.title);
  const dispatch = useDispatch();
  const [data1, setdata1] = useState({
    id: "",
    title: "",
    status: 1,
  });

  const { title, status } = data1;

  useEffect(() => {
    if (data != null) {
      const setData = () => {
        setdata1({
          id: data.id,
          title: data.title,
          status: data.status,
        });
      };
      setData();
    } else {
      setdata1({
        id: getUid(),
        title: "",
        status: 1,
      });
    }
  }, [data]);

  function handOnchange(event) {
    const target = event.target;
    const name = target.name;
    const value =
      target.value === "0" ? 0 : target.value === "1" ? 1 : target.value;
    const newData1 = { ...data1 };
    newData1[name] = value;
    setdata1(newData1);
  }
  function hanleSubmit(e) {
    e.preventDefault();
    if (titleName === "edit") {
      dispatch(actionData.editTodoSuccess(data1));
    } else {
      dispatch(actionData.addDataSuccess(data1));
    }
  }
  const closeForm = () => {
    dispatch(actionData.closeForm());
  };
  return (
    <div className="form-edit">
      <form className="form-edit-todo" onSubmit={hanleSubmit}>
        <div className="form-group">
          <label>Tên công việc</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nhập tên công việc"
            value={title}
            name="title"
            onChange={handOnchange}
          />
        </div>

        <div className="form-group">
          <label>Trạng thái</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            defaultValue={status}
            name="status"
            onChange={handOnchange}
          >
            <option value={1}>Đã hoàn thành</option>
            <option value={0}>Chưa hoàn thành</option>
          </select>
        </div>
        <button type="submit">Lưu</button>
        <button onClick={closeForm}>Huỷ</button>
      </form>
    </div>
  );
}

export default FormTodo;
