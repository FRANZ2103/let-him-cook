// https://mui.com/material-ui/react-switch/
import React, { useState } from "react";
import chefLogo from "../assets/chef-claude-icon.png";
import DarkModeToggle from "../DarkModeToggle.jsx";
export default function ChefHeader() {
  const [darkMode, setDarkMode] = useState(false);

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
    <nav className="dg-nav bg-[#fafaf8] dark:bg-[#18181A] dark:text-gray-200 flex justify-between">
      <div className="dg-logo flex items-center">
        <img
          className="dg-logo-icon bg-[#1a1a18] dark:text-gray-200"
          src={chefLogo}
          alt="logo"
          onMouseOver={handleMouseHover}
        />
        DishGen
      </div>
      <div className="flex justify-end item-center gap-4">
        <span className="dg-badge flex items-center">Beta </span>
        <DarkModeToggle onToggle={toggleDarkMode} />
      </div>
    </nav>
  );
}
