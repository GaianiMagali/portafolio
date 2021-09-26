import React, { useState } from 'react';
import './App.scss';
import { Navbar } from './components/common/Navbar';
import { Particle } from './components/ui/Particle';
import { AppRouter } from './routes/AppRouter';


export const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

