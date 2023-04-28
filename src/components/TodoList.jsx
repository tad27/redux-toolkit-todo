import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todos);

  return (
    // <ul>
    //   {todos?.map((todo) => (
    //     <li key={todo.id}>{todo.title}</li>
    //   ))}
    // </ul>
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="!bg-purple-500">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
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
  console.log(todo);
  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.completed}
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
          <button className="btn-outline btn-success btn-xs flex items-center">
            Edit
          </button>
          <button className="btn-outline btn-error btn-xs flex items-center">
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};
