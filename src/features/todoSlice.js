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
      state.todos.map((todo) => {
        todo.completed = state.resolveAll;
      });
    },
    updateTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.id = action.payload.id;
          todo.title = action.payload.title;
          todo.completed = action.payload.completed;
        }
        return todo;
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  toggleAllTodos,
  updateTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
