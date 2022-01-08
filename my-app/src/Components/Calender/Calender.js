import React, { useState } from 'react'
import './Calender.css'
const BookingForm = (props) => {
  const Title = props.Title
  const [date, setdate] = useState()
  const [time, setTime] = useState()
  const [id, setId] = useState(0)
  const TimeSlot = [
    { text: "Please Select", value: "" },
    { text: "09:00-11:00", value: "09:00-11:00" },
    { text: "12:00-02:00", value: "12:00-02:00" },
    { text: "03:00-05:00", value: "03:00-05:00" },
  ];
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
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

    let exist = false;
    myArray.forEach((element) => {
      if (element.date === date && element.time === time) {
        exist = true;
        alert(`Please Choose Another Time`)
      }
    })
    if (!exist) {
      setId(id + 1)
      setTime(time)
      myArray.push({ date, time, id, Title, today })
    }
    localStorage.setItem('date', JSON.stringify(myArray))
  }
  return (
    <div className='ContainerCalender'>
      <form onSubmit={handleSubmit}>
        <label className='today'>Today {today}</label>
        <label className='booking'>Start Booking</label>
        <input className='inputDate' type='date' min={startbook} value={date} onChange={(e) => { setdate(e.target.value) }} />
        <label className='booking'> Select Time</label>
        <select className='inputDate' onChange={(e) => { setTime(e.target.value) }}>
          {TimeSlot.map((item) => { return <option value={item.value}>{item.text}</option> })}
        </select>
        <input className='btnCalender' type="submit" />
      </form>
    </div>
  )
}
export default BookingForm
