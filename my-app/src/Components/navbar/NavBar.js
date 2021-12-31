import React from "react";
import "./NavBar.css";

import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";


export default function Navpath() {
  const navigate = useNavigate();
  const handleUseNavigate = () => {
    localStorage.getItem('User') ? navigate('/Services') : navigate('/SignInUp');
  };
  return <NavBar handleUseNavigate={handleUseNavigate} />
}


const NavBar = (props) => {
  let isLoggedIn = localStorage.getItem('User');
  const logout = () => {
    localStorage.removeItem('User')
    props.handleUseNavigate()
  }



  return (
    <nav >
      <div className="navbarContainer">


        <div className="logo">
          <img src='./img/logo.png' alt="logo" />
        </div>
        <div className="nav-list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Services">Services</Link></li>
            {isLoggedIn ? <li><Link to="/Profile">Profile</Link></li> : null}
            <li><Link to="/about">About us</Link></li>

          </ul>
        </div>
        <div className="shoppingIcon">
          <Link to="/Checkout"><ShoppingIcon /></Link>
          <Link to="/Checkout"><span>0</span></Link>
          
        </div>
        <div className="login_logout">
          {isLoggedIn ? <button onClick={logout}><Link to="/SignInUp">Log out</Link></button> : <button><Link to="/SignInUp">Log In</Link></button>}
        </div>


      </div>
    </nav>
  );
}

// export default NavBar;
