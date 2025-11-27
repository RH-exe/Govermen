import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Servicios from './pages/Servicios.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import ScrollTop from './components/ScrollToTop.jsx';


function App() {
  return (
    <BrowserRouter basename='/govermen'>
      <div className='App'>
        <NavBar/>
        <ScrollTop/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/*' element={<Navigate to= '/'/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

