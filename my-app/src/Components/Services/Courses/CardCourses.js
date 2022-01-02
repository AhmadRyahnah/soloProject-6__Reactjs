import React from 'react'
import './CardCourses.css'
const CardCourses = (props) => {
    return (
        <div className='CoursesContainer'>
            <img src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.numUS} $</h4>
            <button>Book Now</button>
        </div>
    )
}

export default CardCourses;
