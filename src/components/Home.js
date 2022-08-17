import React from 'react';

import { Email, Github, Linkedin } from '../images';
import './Home.css';
import Octocat from '../image/Octocat.png';

function Home() {
  return (
    <div className="home">
      <section className='section section-profile'>
        <img className="profile-img"src={Octocat} alt="octocat" />
      </section>
      <section className='section section-content'>
        <h1>Hello, I'm Maitê</h1>
        <h3>I'm a front end developer</h3>
        <div className='logo-img-container'>
          <img className="logo-img" src={ Linkedin} alt="linkedin" />
          <img className="logo-img" src={ Github } alt="github" />
          <img className="logo-img" src={ Email } alt="email" />
        </div>
      </section>
    </div>
  )
}

export default Home;