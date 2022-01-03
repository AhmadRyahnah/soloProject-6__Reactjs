import React, { useState } from 'react'
import './CardLecture.css'
const CardLecture = (props) => {

    const Lecture = props;

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(Lecture);
        // localStorage.setItem('myLecture',JSON.stringify(Lecture))
        let myLecture = [];
        const myAllLecture = (localStorage.getItem('Lecture')) ? JSON.parse(localStorage.getItem('Lecture')) : [];
        console.log(myAllLecture);
        myLecture = myAllLecture
        myLecture.push(Lecture)
        console.log(myLecture.length);
        localStorage.setItem('Lecture', JSON.stringify(myLecture))

    }



    return (
        <div className='cardContainer'>
            <img src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <h5>{props.desc}</h5>
            <h4>{props.price} $</h4>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    )
}
export default CardLecture;
