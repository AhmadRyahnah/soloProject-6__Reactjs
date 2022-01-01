import React from 'react'
import CardInfo from './CardInfo';
import CardUS from './CardUS';
import './Unknown Cash.css'


const UnknownCash = () => {

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
        <div className='UnknownCash'>
            {Cards}
        </div>
    )
}
export default UnknownCash;
