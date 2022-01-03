import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/footer/footer";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Page/Home";
import Services from "./Page/Services";
import SignInUp from './Page/Sign-In-Up'
import Lecture from '../src/Components/Services/Lecture/Lecture'
import Courses from "./Components/Services/Courses/Courses";
import ConfirmBooking from "./Components/Services/Courses/ConfirmBooking";
import Profile from  './Components/Profile/Profile'
import About from "./Components/About/About";


const App = () => {

  

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='SignInUp' element={<SignInUp />} />
        <Route path='Checkout' element={<Checkout />} />
        <Route path='Services' element={<Services />} />
        <Route path='Lecture' element={<  Lecture />} />
        <Route path='Courses' element={<Courses/>} />
        <Route path='ConfirmBooking' element={<ConfirmBooking/>} />
        <Route path='Profile' element={<Profile/>} />
        <Route path='About' element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
export default App;