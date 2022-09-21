import React from 'react';

import { Github, Linkedin } from '../images';
import Octocat from '../image/Octocat.png';

function Home() {
  return (
    <main >
      <section >
        <img src={Octocat} alt="octocat" />
      </section>
      <section >
        <h1>Hello, I'm Maitê</h1>
        <h3>I'm a front end developer</h3>
        <div >
          <a href='https://www.linkedin.com/in/maitemcaetano/' target="_blank" rel="noopener noreferrer">
            <img src={ Linkedin} alt="linkedin" />
          </a>
          <a href='https://github.com/maite-marques' target="_blank" rel="noopener noreferrer">
            <img src={ Github } alt="github" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home;