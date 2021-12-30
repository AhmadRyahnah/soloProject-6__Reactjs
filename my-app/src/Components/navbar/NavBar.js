import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import logo from './LOGO.png';



const NavBar = () => {




  return (
    <nav >
      <div className="navbarContainer">
        <div className="logo">
          <img src='./img/logo.png' alt="logo" />

        </div>
        <div className="nav-list">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/about">About us</Link></li>

          </ul>
        </div>
        <div className="shoppingIcon">
          <Link to="/about"><ShoppingIcon /></Link>
          <span>0</span>
        </div>
        <div className="login_logout">
          <button><Link to="/contact">Log In</Link></button>
        </div>


      </div>
    </nav>
  );
}

export default NavBar;
