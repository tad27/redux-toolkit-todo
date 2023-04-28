import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = JSON.parse(localStorage.getItem("Todo State")) || {
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
      localStorage.setItem("Todo State", JSON.stringify(state));
      console.log(JSON.parse(localStorage.getItem("Todo State")));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("Todo State", JSON.stringify(state));
      if (state.todos.length < 1) localStorage.removeItem("Todo State");
    },
    toggleTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      localStorage.setItem("Todo State", JSON.stringify(state));
    },
    toggleAllTodos(state) {
      state.resolveAll = !state.resolveAll;
      state.todos.map((todo) => {
        todo.completed = state.resolveAll;
      });
      localStorage.setItem("Todo State", JSON.stringify(state));
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
      localStorage.setItem("Todo State", JSON.stringify(state));
    },
    clearTodos(state) {
      state.todos = [];
      localStorage.removeItem("Todo State");
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  toggleAllTodos,
  updateTodo,
  clearTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
