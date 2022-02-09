import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Services from './components/Services'

function App() {

  const packages = ['Activate your Crystals', 
                    'Monkey Meditation', 
                    'Soak in the Hotsprings', 
                    'Hypnotherapy', 
                    'Mineral Bath']

  return (
    <div className="App">
      <BrowserRouter>
          <header>
            <h1 className="title">Welcome to Monty's Mineral SPA</h1>
            <div className="navBar">
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/packages">Our Packages</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>
          </header>
        <div>
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="/packages" element={<Packages packages={packages}/>} />
              <Route path="/services" element={<Services/>} />
          </Routes>
        </div>
      </BrowserRouter>  
    </div>
  );
}

export default App;





