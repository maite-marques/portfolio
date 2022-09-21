import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='bg-red-200'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
}

export default Header;