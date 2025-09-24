import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx"; //toggleTheme
import { BsSun, BsMoon } from "react-icons/bs";


const navigationBar = () => {
  const { siteMode, changeMode } = useContext(ThemeContext);
  const nameAuthor = "Tharushi Kodithuwakku";

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
          {nameAuthor}
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" style={{ color: `var(--text-color)` }}> {/* Link to the "Home" page */}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: `var(--text-color)` }}> {/* Link to the "About" page */}
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" style={{ color: `var(--text-color)` }}> {/* Link to the "Project" page */}
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: `var(--text-color)` }}> {/* Link to the "Contact" page */}
                Contact
              </Link>
            </li>
          </ul>

          {/*Toggle Button - Button for switching between Dark/Light mode */}
          <button
            onClick={changeMode}
            className="text-2xl"
            style={{ color: `var(--text-color)` }}
          >
            {siteMode === "dark" ? <BsSun /> : <BsMoon />}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default navigationBar;
