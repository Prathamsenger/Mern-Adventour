import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import Country from './Pages/Country';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'; 
import Activities from './Pages/Activities';



const App = () => {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/country" element={<Country />} />
        <Route path="/activities" element={<Activities />} />

        

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
