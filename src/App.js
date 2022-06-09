import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Navbar from './components/Pages/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>


      </Routes>
    </div>
  );
}

export default App;
