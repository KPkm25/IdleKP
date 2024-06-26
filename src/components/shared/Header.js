// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">IdleKP</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
