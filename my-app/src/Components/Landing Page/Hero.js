import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'
import HeroImage from './hero.jpg'
const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="heroImage">
                <span> BUILD YOUR PC</span>

                <Link to="/shop"><button>SHOP NOW</button></Link>
            </div>
        </div>
    )
}
export default Hero;