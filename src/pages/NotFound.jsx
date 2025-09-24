import React from 'react';
import { Link } from 'react-router-dom';
// The necessary things for the section that is displayed when a page is not found are imported here.

const NotFound = () => {   // 404 error page is prepared
  return (
    // The page content is centered.
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-silver text-center">    
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1> 
      <h2 className="text-3xl font-semibold text-silver mb-8">Page Not Found</h2>
      <p className="max-w-md mx-auto mb-8">
        The page you are looking for does not exist. You may have mistyped the address or the page may have moved.
      </p>
       {/* Button to return to the home page */}
      <Link 
        to="/" 
        className="bg-green-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;