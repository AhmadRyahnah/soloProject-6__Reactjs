import React, { useState, useEffect } from 'react'
import './newCalender.css'
const BookingForm = () => {

    const [date, setdate] = useState()
    const [time, setTime] = useState()
    console.log(time);

    const TimeSlot = [
        { text: "Please Select", value: "" },
        { text: "09:00-11:00", value: "09:00-11:00" },
        { text: "12:00-02:00", value: "12:00-02:00" },
        { text: "03:00-05:00", value: "03:00-05:00" },
    ];

    const [id, setId] = useState(0)

    // ***************TO GET DAY AND DAY AFTER 7 DAYS FOR BOOKING***********************
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1; //January is 0!
    let year = today.getFullYear();
    // console.log(today);
    console.log(day);
    console.log(month);
    console.log(year);
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = day + '-' + month + '-' + year;
    // let startbook = year + '-' + month + '-' + ((new Date().getDate()) + 7);
    let startbook = year + '-' + month + '-' + day;
    console.log(startbook);

    const handleSubmit = (e) => {
        e.preventDefault();

        let myArray = localStorage.getItem("date")
            ? JSON.parse(localStorage.getItem("date"))
            : [];


        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].date === date && myArray[i].time === time) {
                alert('choose another time')
            }

        }

        setTime(time)
        setId(id + 1)
        let Courses = localStorage.getItem("Courses")
            ? JSON.parse(localStorage.getItem("Courses"))
            : [];
            const myCourse=Courses.title
        myArray.push({ date, time, id ,myCourse})
        localStorage.setItem('date', JSON.stringify(myArray))


    }

    return (
        <div className='ContainerCalender'>
            <form onSubmit={handleSubmit}>
                {/* <input value={today} /> */}
                <label className='today'>Today {today}</label>
                <label className='booking'>Start Booking</label>
                <input className='inputDate' type='date' min={startbook} value={date} onChange={(e) => { setdate(e.target.value) }} />
                <label className='booking'> Select Time</label>
                <select className='inputDate' onChange={(e) => { setTime(e.target.value) }}>
                    {TimeSlot.map((item) => {
                        return <option value={item.value}>{item.text}</option>
                    })}
                </select>
                <input className='btnCalender' type="submit" />
            </form>
        </div>
    )
}

export default BookingForm
