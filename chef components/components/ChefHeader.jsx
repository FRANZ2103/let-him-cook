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
    <nav className="bg-[#fafaf8] dark:bg-[#19191C] dark:text-gray-200 flex justify-between items-center fixed top-0 left-0 w-full min-h-[4rem] px-3 md:px-6">
      <div className="flex items-center gap-2">
        <img
          className="w-7 h-7 md:w-9 md:h-9"
          src={darkMode ? chefLogo2 : chefLogo}
          alt="logo"
          onMouseOver={handleMouseHover}
        />
        <span className="text-sm md:text-xl dark:text-[#FF6B6B] font-medium">
          Let Him Cook!
        </span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <span className="inline-flex items-center rounded-xl bg-[#f0efe8] dark:bg-[#2E2E2B] px-2 py-1 text-xs font-medium text-[#888780]">
          Beta
        </span>
        <DarkModeToggle onToggle={toggleDarkMode} />
      </div>
    </nav>
  );
}
