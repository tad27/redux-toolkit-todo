import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function NewTodoForm() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" my-10 space-y-2 flex justify-end items-end w-full"
    >
      <div className="form-control mx-4 lg:mx-0">
        <div className="input-group">
          <input
            type="text"
            placeholder="Add new todo here..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="input input-bordered"
          />
          <button className="btn bg-teal-600 text-slate-200">
            Add New Todo
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewTodoForm;
