import React from 'react'
import './CardLecture.css'
const CardLecture = (props) => {
    return (
        <div className='cardContainer'>
            <div className='titleCard'>
                <p className='num'>
                    <img src={props.imgS} alt={props.alt} />
                    {props.num}
                </p>
            </div>
            <div className='imgCard'>
                <img src={props.imgL} alt={props.alt} />
            </div>
            <div className='priceCard'>
                <p className='price'>{props.price}</p>
            </div>
            <button>Add to cart</button>
        </div>
    )
}
export default CardLecture;
