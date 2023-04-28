import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    { id: uuidv4(), title: "Learn Redux", completed: true },
    { id: uuidv4(), title: "Take A quiz", completed: false },
  ],
  resolveAll: false,
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
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
    toggleAllTodos(state) {
      state.resolveAll = !state.resolveAll;
      if (state.resolveAll === true)
        state.todos.map((todo) => (todo.completed = true));
      else state.todos.map((todo) => (todo.completed = false));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  toggleAllTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
