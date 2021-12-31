import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/footer/footer";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Page/Home";
import SignInUp from './Page/Sign-In-Up'

const App = () => {



  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='SignInUp' element={<SignInUp />} />
        <Route path='Checkout' element={<Checkout />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
export default App;