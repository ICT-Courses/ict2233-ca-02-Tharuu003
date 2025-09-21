import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import './App.css';

function App() {
  const BackgroundClass = 'bg-black text-silver';

  return (
    <div className={'w-full min-h-screen ${BackgroundClass}'}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;