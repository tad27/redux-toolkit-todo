import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/themeSlice";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const listener = (e) => {
    dispatch(changeTheme(e.matches ? "dark" : "light"));
  };

  useEffect(() => {
    prefersDarkTheme.addEventListener("change", listener);
    return () => prefersDarkTheme.removeEventListener("change", listener);
  }, []);

  return <>{children}</>;
}

export default ThemeProvider;
