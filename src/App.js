import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/Landing/Landing';
import Blog from './pages/Blogs/Blogs';
import About from './pages/About/About';
import ReactGA from 'react-ga4';

const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
console.log(`Initializing Google Analytics with ID: ${measurementId}`);

// Initialize Google Analytics with the Measurement ID from environment variable
ReactGA.initialize(measurementId);

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
