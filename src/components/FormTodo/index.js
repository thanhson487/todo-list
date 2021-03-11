import React from "react";
import "./style.scss";
function FormTodo(props) {
  return (
    <div className="form-edit">
      <form className="form-edit-todo">
        <div className="form-group">
          <label>Tên công việc</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nhập tên công việc"
          />
        </div>

        <div className="form-group">
          <label>Trạng thái</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option value="1">Đã hoàn thành</option>
            <option value="0">Chưa hoàn thành</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default FormTodo;
