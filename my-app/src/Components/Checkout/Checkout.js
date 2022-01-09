import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import './Checkout.css'
import Payment from './Payment';
import { UserContext } from '../../App';
const Checkout = (props) => {
    const { setmyLecture } = useContext(UserContext)

    const removeItem = () => {

        const myArray = localStorage.getItem('Lecture') ?
            JSON.parse(localStorage.getItem('Lecture')) : []
        for (let i = 0; i < myArray.length; i++) {
            if (props.id === myArray[i].id) {
                myArray.splice(i, 1)
                setmyLecture(myArray.length)
            }
        }
        localStorage.setItem('Lecture', JSON.stringify(myArray))


        if (myArray.length === 0) {
            localStorage.removeItem('Lecture')
        }
    }

    return (

        <div className='formAndLecture'>
            <div className='CheckoutContainer'>
                <div className='checkoutCard'>

                    <div className='Card'>

                        <img src={props.img} alt={props.alt} />
                        <h3>{props.title}</h3>
                        <h2>{props.price}.00 $</h2>
                        <button onClick={removeItem} >Delete</button>
                    </div>

                </div>

                <div className='formChecout'>
                    <Payment />
                </div>
            </div>
        </div>

    )
}
export default Checkout;
