import React, { useState } from "react";
import chefLogo from "../assets/chef-claude-icon.png";
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
    <nav className="dg-nav bg-[#fafaf8] dark:bg-[#18181A] dark:text-gray-200">
      <div className="dg-logo">
        <img
          className="dg-logo-icon bg-[#1a1a18] dark:text-gray-200"
          src={chefLogo}
          alt="logo"
          onMouseOver={handleMouseHover}
        />
        DishGen
      </div>
      <span className="dg-badge">Beta </span>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </nav>
  );
}
