
import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
      
    </div>
  );
}

export default App;
