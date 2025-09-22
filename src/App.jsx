import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import './App.css';

function App() {

  return (
    <div className='background'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;