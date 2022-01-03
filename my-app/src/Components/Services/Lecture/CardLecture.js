import React, { createContext, useContext, useState } from 'react'
import './CardLecture.css'
import { UserContext } from '../../../App'


const CardLecture = (props) => {
    
    // const [Total,setTotal]=useState(0);
    // console.log(Total); 
    
    
    const Lecture = props;
    const { myLecture, setmyLecture } = useContext(UserContext)
    
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
        // setTotal(myLecture.length)
        setmyLecture(myLecture.length)


    }


    // disabled={handleClick}

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
