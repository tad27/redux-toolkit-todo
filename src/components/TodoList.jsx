import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleAllTodos,
  toggleTodo,
  updateTodo,
} from "../features/todoSlice";
import UpdateTodo from "./UpdateTodo";

function TodoList() {
  const { todos, resolveAll } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length < 1)
    return (
      <div>
        <h3>Oops!</h3>
        <p>You don't have a todo yet.</p>
      </div>
    );
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="!bg-purple-500">
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={resolveAll}
                  onChange={() => dispatch(toggleAllTodos())}
                />
              </label>
            </th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todos?.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;

export const Todo = (todo) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <p className="font-bold">{todo?.title}</p>
        </div>
      </td>
      <td>
        <div
          className={`text-sm flex items-center justify-center rounded-sm max-w-fit px-2 badge ${
            todo.completed ? "badge-accent" : "badge-error"
          }`}
        >
          {todo?.completed ? "Completed" : "Not Completed"}
        </div>
      </td>
      <th>
        <div className="flex gap-1">
          {/* <button
            onClick={handleUpdate}
            className="btn-outline btn-success btn-xs flex items-center"
          >
            Edit
          </button> */}
          <UpdateTodo todo={todo} />
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="btn-outline btn-error btn-xs flex items-center"
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};
