import React from 'react'
import { Link } from "react-router-dom";


const Services = () => {
    return (
        <div className='twoCard'>

            <Link to='/Lecture'>
                <div className='cardOne'>
                    <img src='' alt='' />
                    <h2>US</h2>
                    <h6>ahmad</h6>
                    <h4>ahmad</h4>
                </div>
            </Link>
            <Link to='/Courses'>
                <div className='cardTwo'>
                    <div className='cardOne'>
                        <img src='' alt='' />
                        <h2>US</h2>
                        <h6>ahmad</h6>
                        <h4>ahmad</h4>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Services
