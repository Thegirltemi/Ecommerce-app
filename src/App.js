import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Women from './components/Women';
import Men from './components/Men';



function App() {
  return (
    <div className="App">
     <ToastContainer/>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/women" element={<Women />} />
     <Route path="/men" element={<Men/>} />
     </Routes>
     
    </div>
  );
}

export default App;
