import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Filtrex } from './filtrex';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Filtrex />
        </p>
      </header>
    </div>
  );
}

export default App;
