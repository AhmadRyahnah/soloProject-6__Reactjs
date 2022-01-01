import React from 'react'
import CardInfo from './CardInfo';
import CardUS from './CardLecture';
import './Lecture.css'


const Lecture = () => {

    const Cards = CardInfo.map((Card) => {
        return (

            <CardUS
                key={Card.id}
                num={Card.num}
                imgS={Card.imgS}
                imgL={Card.imgL}
                alt={Card.alt}
                price={Card.price}
            />
        )
    });

    return (
        <div className='Lecture'>
            {Cards}
        </div>
    )
}
export default Lecture;
