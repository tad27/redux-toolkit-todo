import React from "react";
import { useDispatch } from "react-redux";
import { changeTheme, setSystemTheme } from "../features/themeSlice";

function ThemeSwitcher() {
  const dispatch = useDispatch();

  return (
    <div>
      Choose your theme:
      <div className="flex items-center gap-2 text-slate-400">
        <button onClick={() => dispatch(changeTheme("light"))}>Light</button>
        <button onClick={() => dispatch(changeTheme("dark"))}>Dark</button>
        <button onClick={() => dispatch(setSystemTheme())}>System</button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
