import TodoList from "../TodoList";
import React from "react";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
