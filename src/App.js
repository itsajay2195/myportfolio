
import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
      <Skills/>
      <Projects/>
   
    </div>
  );
}

export default App;
