import React, { useState } from 'react'
import './CardLecture.css'
const CardLecture = (props) => {



    return (
        <div className='cardContainer'>
         <img src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.price} $</h4>
            <button>Add to cart</button>
        </div>
    )
}
export default CardLecture;
