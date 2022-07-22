// import './App.css';

import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Error from "./components/Error";
import { useState } from "react";
import Login from "./components/Login";

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
