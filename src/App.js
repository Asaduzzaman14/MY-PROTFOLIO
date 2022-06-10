import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import Contuctme from './components/Pages/Contuctme';
import Home from './components/Pages/Home';
import Menufacture from './components/Pages/Menufacture';
import Navbar from './components/Pages/Navbar';

import AOS from 'aos';
import { useEffect } from 'react';
import Fruites from './components/Pages/Fruites';
import Dentist from './components/Pages/Dentist';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/ContactMe' element={<Contuctme />}></Route>
        <Route path='/menufacture' element={<Menufacture />}></Route>
        <Route path='/fruites' element={<Fruites />}></Route>
        <Route path='/dantal' element={<Dentist />}></Route>


      </Routes>
    </div>
  );
}

export default App;
