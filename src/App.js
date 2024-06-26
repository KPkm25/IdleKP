import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing/Landing';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route path="/blog" element={<Blogs />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
