import logo from './logo.svg';
import './App.css';
import Header from './Compnents/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Compnents/About';
import Skills from './Compnents/Skills';
import Home from './Compnents/Home';
import Contact from './Compnents/Contact';
import Portfolio from './Compnents/Portfolio';
import Services from './Compnents/Services';
import Resume from './Compnents/Resume';
import Error from './Compnents/error';

function App() {
  return (
    <div className="App">
      {/* <i class="bi bi-list mobile-nav-toggle d-xl-none"></i> */}
       <div className="App">
       <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route index element={<Home />} />Resume
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
        {/* <Route path='*'  element={<Error />}/> */}
        // <Route exact path="/error" element={<Error />}></Route>
      </Routes>
      </div>
    
    </div>
  );
}

export default App;
