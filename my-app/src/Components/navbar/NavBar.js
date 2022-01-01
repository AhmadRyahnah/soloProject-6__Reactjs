import React, { useState } from "react";
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
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click)


  return (
    <nav >
      <div className="navbarContainer">
        <div className="logo" onClick={handleClick}>
          <img src='./img/logo.png' alt="logo" />
        </div>
        <div className={click ? "nav-list active" : "nav-list"}>
          <ul >
            <li><Link to="/" onClick={handleClick}>Home</Link></li>
            <li><Link to="/Services" onClick={handleClick}>Services</Link></li>
            {isLoggedIn ? <li><Link to="/Profile" onClick={handleClick}>Profile</Link></li> : null}
            <li><Link to="/about" onClick={handleClick}>About us</Link></li>

          </ul>
        </div>
        <div className={click ? "shoppingIcon active" : "shoppingIcon"}>
          <ul >
            <li>
              <Link to="/Checkout" onClick={handleClick}><ShoppingIcon /></Link>
              <Link to="/Checkout" onClick={handleClick} className="shoppingIcon"><span>0</span></Link>
            </li>
          </ul>
        </div>
        <div className={click ? "login_logout active" : "login_logout"}>
          <ul >
            <li>

              {isLoggedIn ? <button onClick={logout}><Link to="/SignInUp" onClick={handleClick}>Log out</Link></button>
                :
                <button><Link to="/SignInUp" onClick={handleClick}>Log In</Link></button>}

            </li>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={!click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>


      </div>
    </nav>
  );
}


