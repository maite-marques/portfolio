import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <nav className='header'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
}

export default Header;