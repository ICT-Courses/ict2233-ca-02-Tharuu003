// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const myName = 'Tharushi Kodithuwakku';

  return (
    <nav className="fixed w-full top-0 bg-black text-silver p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif text-green-600">
          {}
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-silver">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-silver">About</Link>
          </li>
          <li>
            <Link to="/projects" className="text-silver">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-silver">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;