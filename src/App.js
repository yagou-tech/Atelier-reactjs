import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Reservation from './components/Reservation';
import { Routes, Route }from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Inscription from './components/Inscription';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inscription' element={<Inscription />} />
      </Routes>

    </div>
  );
}

export default App;
