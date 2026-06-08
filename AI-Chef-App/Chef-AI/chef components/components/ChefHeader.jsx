// https://mui.com/material-ui/react-switch/
import React, { useState } from "react";
import chefLogo2 from "../assets/white-dishgen.svg";
import chefLogo from "../assets/black-dishgen.svg";
import DarkModeToggle from "../DarkModeToggle.jsx";
export default function ChefHeader() {
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    console.log("Dark Mode? " + darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  function handleMouseHover() {
    console.log("Mouse hovered over image!\n");
  }
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <nav className="dg-nav bg-[#fafaf8] dark:bg-[#19191C] dark:text-gray-200 flex justify-between fixed top-0 left-0 min-w-full min-h-[4rem]">
      <div className="dg-logo flex items-center pl-4">
        <img
          className="dg-logo-icon dark:text-gray-200"
          src={darkMode ? chefLogo2 : chefLogo}
          alt="logo"
          onMouseOver={handleMouseHover}
        />
        DishGen
      </div>
      <div className="flex justify-end items-center gap-4 max-h-[1.5rem]">
        <span className="inline-flex items-center rounded-xl bg-[#f0efe8] px-2 py-1 text-xs font-medium text-[#888780] inset-ring inset-ring-gray-500/10">
          Beta
        </span>

        <DarkModeToggle onToggle={toggleDarkMode} />
      </div>
    </nav>
  );
}
