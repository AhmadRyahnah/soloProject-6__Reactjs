import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Fragment>
            <h1 className='header'>Cart Items</h1>
            <div className='formAndLecture'>
                {Lectures ?
                    <div className='CheckoutContainer'>
                        {Lecturetable}

                        <div className='formChecout'>
                            <Payment />
                        </div>

                    </div> : <h1>Your Cart Is Empty <Link to='/Services'> <button>Go Services</button></Link></h1>}
            </div>
        </Fragment>
    )

}

export default Checkout;
