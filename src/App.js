import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/projects" element={ <Projects /> } />
      <Route exact path="/about" element={ <About /> } />
    </Routes>
  );
}

export default App;
