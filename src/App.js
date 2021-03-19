import './App.css';
import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Menu from './components/Menu'
import Program from './components/Program'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="welcome">
        <img src="https://i.ytimg.com/vi/rmsPnpDoClU/maxresdefault.jpg" alt="welcome"></img>
      </div>

      <Banner />

      <Menu />

      <Program />

      <Footer />
    </div>
  );
}

export default App;
