
import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';



function App() {
  const [lenguaje, setLenguaje] = useState('eng');
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />      
      <Contact />
      <Footer />
    </div>
    );
}

export default App;
