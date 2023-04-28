import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), title: "Learn Redux", completed: true },
    { id: uuidv4(), title: "Take A quiz", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
