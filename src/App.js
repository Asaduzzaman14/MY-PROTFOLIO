import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import Contuctme from './components/Pages/Contuctme';
import Home from './components/Pages/Home';
import Menufacture from './components/Pages/Menufacture';
import Navbar from './components/Pages/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/ContactMe' element={<Contuctme />}></Route>
        <Route path='/menufacture' element={<Menufacture />}></Route>


      </Routes>
    </div>
  );
}

export default App;
