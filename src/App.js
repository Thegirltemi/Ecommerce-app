import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Furniture from './components/Furniture';



function App() {
  return (
    <div className="App">
     <ToastContainer/>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/store" element={<Furniture/>} />
     </Routes>
     
    </div>
  );
}

export default App;
