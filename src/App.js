import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar';
import { Particle } from './components/ui/Particle';
import { AppRouter } from './routes/AppRouter';


export const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="particle-con" style={{ "position": "absolute", "top": 0, "left": 0, zIndex: 2 }}>
          <Particle />
        </div>
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

