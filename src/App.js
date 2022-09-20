import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />
      </Routes>
    </>
  );
}

export default App;
