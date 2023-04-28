import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todoSlice";
import Modal from "./ui/Modal";

function UpdateTodo({ todo }) {
  const [openModal, setOpenModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoStatus, setTodoStatus] = useState(todo.completed);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: todo.id,
        title: todoTitle,
        completed: todoStatus,
      })
    );
    setOpenModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center btn-xs btn-success btn-outline"
      >
        Edit
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={handleSubmit}>
          {/* Title input */}
          <input
            type="text"
            placeholder="Type here"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />

          {/* Completed Checkbox */}
          <div className="form-control">
            <label className="cursor-pointer label flex justify-start gap-2">
              <span className="label-text">Completed?</span>
              <input
                type="checkbox"
                checked={todoStatus}
                onChange={() => setTodoStatus(!todoStatus)}
                className="checkbox checkbox-success"
              />
            </label>
          </div>

          <hr className=" border-slate-800 mb-2 mt-6" />
          <div className="flex gap-2 ">
            <button onClick={handleSubmit} className="btn-success">
              Update
            </button>
            <button
              className="btn-outline btn-error"
              type="button"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default UpdateTodo;
