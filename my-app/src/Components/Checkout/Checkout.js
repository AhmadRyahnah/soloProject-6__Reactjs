import React, { useState } from 'react';
import './Checkout.css'
import Payment from './Payment';


const Checkout = () => {
 
    // fetch user's data from local
    let Lecturetable = null;
    if (localStorage.getItem('Lecture')) {
        let Lectures = JSON.parse(localStorage.getItem('Lecture'));
        console.log(Lectures);
        Lecturetable = (
            <div className='checkoutCard'>
                {Lectures.map((Lecture, id) => {
                    return (
                        <div className='Card'>
                            <img src={Lectures[id].img} alt={Lectures[id].alt} />
                            <h3>{Lectures[id].title}</h3>
                            <h2>{Lectures[id].price}.00 $</h2>
                        </div>
                    )

                })}
            </div>
        )
    }
    let Lectures = JSON.parse(localStorage.getItem('Lecture'));
    return (

        <div className='formAndLecture'>
            {Lectures ?
                <div className='CheckoutContainer'>
                    {Lecturetable}
                    <div className='formChecout'>
                        <Payment />
                    </div>

                </div> : <h1>Your Cart Is Empty</h1>}
        </div>
    )

}

export default Checkout;
