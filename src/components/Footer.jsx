import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-silver text-center py-4 z-40">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tharushi Kodithuwakku. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;