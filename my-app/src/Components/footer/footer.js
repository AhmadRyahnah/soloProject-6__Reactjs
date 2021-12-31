import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  return (
    <footer>
      <div className="about">
        <h1 className="aboutTitle">PC BUILDER</h1>
        <p className="aboutPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className="aboutIcon">
        <h1 className="aboutTitle">Follow Us </h1>
        <h6>www.pcbuilder.com</h6>
        <Link to="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square text-dark  "> </i></Link>
        <Link to="https://www.instagram.com/"><i className="topIcon fab fa-instagram-square text-dark"> </i></Link>
        <Link to="https://twitter.com/?lang=ar"><i className="topIcon fab fa-twitter-square text-dark"> </i></Link>
      </div>

      <div className="contactUs">
        <h1 className="contatUsTitle">Contact US</h1>
        <p className="contatUsPara">Amman/Jordan</p>
        <p className="contatUsPara">+96277745108/+962777685139</p>

      </div>
    </footer>
  );
}

export default Footer;



