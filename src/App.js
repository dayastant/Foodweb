import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='content'>
        <Routes>

        </Routes>

      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
