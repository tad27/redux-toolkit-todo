import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme, setSystemTheme } from "../features/themeSlice";

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const [dropDownOpen, setDropdownOpen] = useState(false);

  const handleClick = (theme) => {
    if (theme === "system") {
      dispatch(setSystemTheme());
      setDropdownOpen(false);
      return;
    }

    dispatch(changeTheme(theme));
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="border-slate-300 border px-5 py-2 rounded-md hover:bg-slate-100"
        onClick={() => setDropdownOpen(!dropDownOpen)}
      >
        Theme
      </button>
      {dropDownOpen === true && (
        <div
          id="dropdown"
          className="absolute min-w-full top-auto right-0 shadow-md !bg-inherit dark:bg-[#2a303c] rounded-lg z-10 flex flex-col mt-6 overflow-hidden"
        >
          <div
            role="button"
            className="w-full bg-emerald-50 dark:!bg-gray-900 p-2"
            onClick={() => handleClick("light")}
          >
            Light
          </div>
          <div
            role="button"
            className="w-full bg-emerald-50 dark:!bg-gray-900 p-2"
            onClick={() => handleClick("dark")}
          >
            Dark
          </div>
          <div
            role="button"
            className="w-full bg-emerald-50 dark:!bg-gray-900 p-2"
            onClick={() => handleClick("system")}
          >
            System
          </div>
        </div>
      )}
    </div>
  );
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
