import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx"; // ✅ Correct relative path

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const MyName = "Tharushi Kodithuwakku";

  return (
    <nav
      className="fixed w-full top-0 p-4 shadow-lg z-50"
      style={{ backgroundColor: `var(--background-color)` }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold font-serif"
          style={{ color: `var(--primary-color)` }}
        >
          {MyName}
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" style={{ color: `var(--text-color)` }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: `var(--text-color)` }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" style={{ color: `var(--text-color)` }}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: `var(--text-color)` }}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-xl"
            style={{ color: `var(--text-color)` }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
