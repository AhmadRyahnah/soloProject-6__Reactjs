import React from 'react'
import CardInfo from './CardInfo';
import CardUS from './CardLecture';
import './Lecture.css'


const Lecture = () => {





    const Cards = CardInfo.map((Card) => {

        return (

            <CardUS
                key={Card.id}
                desc={Card.desc}
                img={Card.img}
                alt={Card.alt}
                title={Card.title}
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
