import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/footer/footer";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Page/Home";
import Services from "./Page/Services";
import SignInUp from './Page/Sign-In-Up'
import UnknownCash from '../src/Components/Services/Unknown Cash/Unknown Cash'



const App = () => {

  

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='SignInUp' element={<SignInUp />} />
        <Route path='Checkout' element={<Checkout />} />
        <Route path='Services' element={<Services />} />
        <Route path='UnknownCash' element={<  UnknownCash />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
export default App;