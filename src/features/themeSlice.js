import { createSlice } from "@reduxjs/toolkit";

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches;

const getInitialTheme = () => {
  if (localStorage.theme) {
    return localStorage.getItem("theme");
  }

  return prefersDarkTheme ? "dark" : "light";
};

const initialState = {
  theme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
    setSystemTheme(state) {
      if (prefersDarkTheme) {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export const { changeTheme, setSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
