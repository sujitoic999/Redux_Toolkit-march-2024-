import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span onDoubleClickCapture={() => dispatch(updateTodo(todo.id))}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
