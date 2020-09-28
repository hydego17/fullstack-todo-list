import React, { Fragment } from "react";
import InputTodo from "./components/input";
import ListTodos from "./components/list";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container-fluid">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
