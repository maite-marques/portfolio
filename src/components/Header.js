import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='flex justify-end space-x-5 text-gray-400 m-6'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
}

export default Header;