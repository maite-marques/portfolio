import React from 'react';

import { Email, Github, Linkedin } from '../images';
import Header from './Header';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <h1>Hello, I'm Maitê</h1>
      <h3>I'm a front end developer</h3>
      <img src={ Linkedin} alt="linkedin" />
      <img src={ Github } alt="github" />
      <img src={ Email } alt="email" />
    </>
  )
}

export default Home;