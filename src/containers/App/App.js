import TodoList from "../TodoList";
import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import FormTodo from "../../components/FormTodo";

function App() {
  const openform = useSelector((state) => state.listData.openform);
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <TodoList></TodoList>

          {openform ? <FormTodo /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
