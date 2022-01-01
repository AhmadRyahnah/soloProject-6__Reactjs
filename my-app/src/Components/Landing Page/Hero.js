import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="heroImage">
                <div className="btnOne">
                    <h1> lorem lorem lorem</h1>

                    <Link to="/shop"><button>SHOP NOW</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Hero;