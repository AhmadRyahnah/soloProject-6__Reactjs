import React, { useState, useContext } from "react";
import './Checkout.css'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";

const Payment = () => {
    const {setmyLecture } = useContext(UserContext)
    let navigate = useNavigate()
    const [Coupon, setCoupon] = useState();
    const handleSubmit = (e) => {


        if (localStorage.getItem('loggedUser')) {
            e.preventDefault();
            swal({
                title: "Payment Complete Successfully ",
                text: "Welcome!",
                icon: "success",
                button: "ok ",
            });

            localStorage.removeItem('Lecture')
            setTimeout(() => { setmyLecture(0) }, 2000)

        } else {
            swal({
                title: "Please Login ",


                button: "ok ",
            });
            navigate('/SignInUp')
        }
    }

    // const handleRemove = (e) => {
    //     e.preventDefault();
    //     localStorage.removeItem('Lecture')
    //     setmyLecture(0)
    // }




    let Total = 0;
    let Lectures = (localStorage.getItem('Lecture')) ? JSON.parse(localStorage.getItem('Lecture')) : [];
    for (let id = 0; id < Lectures.length; id++) {
        console.log(Lectures[id].price);
        Total = Total + Lectures[id].price

    }
    return (
        <form className="loginForm">
            {Coupon == 'ryahnah' ? <h2>Total {Total * 0.8}.00 $</h2> : <h2>Total {Total}.00 $</h2>}

            <input className="text" type='text' value={Coupon} onChange={(e) => { setCoupon(e.target.value) }} placeholder='Enter Coupon' />

            {Coupon == 'ryahnah' ? <p>Coupon <strong>ryahnah</strong> is applied and discounted <strong>{Total * 0.2}.00 $</strong></p> : <p>Enter the discount Coupon <strong>ryahnah</strong></p>}
            <button className='Payment' onClick={handleSubmit}>Complete Payment</button>
            {/* <button className='Payment' onClick={handleRemove}>Remove Item</button> */}
        </form>

    )
}

export default Payment
