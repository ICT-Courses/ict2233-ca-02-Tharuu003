import React from "react";


const Navbar=() =>{
  const myName = 'Tharushi Kodithuwakku';

  return(
    <nav className="bg-black text-silver p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-[30px] font-bold font-serif text-dark-green">
        Tharushi Kodithuwakku</a>
        <ul className="flex spece-x-4">
          <li>
            <a href="/about" className="text-silver hover:text-dark-green transition-colors duration-300">
            About</a>
          </li>
          <li>
            <a href="/projects" className="text-silver hover:text-dark-green transition-colors duration-300">
            Projects</a>
          </li>
          <li>
            <a href="/contact" className="text-silver hover:text-dark-green transition-colors duration-300">
            Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;