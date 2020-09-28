import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./edit";
const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //Delete function
  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.err(err.message);
    }
  }

  // Display list
  async function getTodos() {
    const res = await fetch("http://localhost:5000/todos");

    const todoArray = await res.json();
    setTodos(todoArray);
  }
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="table-responsive">
        <table className=" table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">Description</th>
              <th className="text-center">Option</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td className="d-flex justify-content-around">
                  <EditTodo todo={todo} />
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;
