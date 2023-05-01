import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <header className="bg-slate-50 border-b h-16 px-2">
      <div className="wrapper max-w-7xl lg:mx-auto flex items-center justify-between h-full">
        <span className="text-2xl font-bold">Redux Todo</span>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
