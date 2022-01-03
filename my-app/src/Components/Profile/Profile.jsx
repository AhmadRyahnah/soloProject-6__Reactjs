import React from 'react';
import Calender from '../Calender/Calender';
import './Profile.css';




const Profile = () => {

    // fetch user's data from local
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(loggedUser);
    // const timeBooking = JSON.parse(localStorage.getItem('timeOfCourse'));
    // console.log(timeBooking[0].startDate);
    let bookingstable = null;
    if (localStorage.getItem('timeOfCourse')) {
        let bookings = JSON.parse(localStorage.getItem('timeOfCourse'));
        bookingstable = (
            <div className='customProfile'>
                {bookings.map((booking, id) => {
                    return (
                        <div className="row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Course name</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Time</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {localStorage.setItem('total',JSON.stringify(bookings.length))}
                                        {console.log(bookings.length)}
                                        <td>{bookings[id].Title}</td>
                                        <td>{bookings[id].startDate}</td>
                                        <td>{bookings[id].endDate}</td>
                                        <td>{bookings[id].time}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )

                })}
            </div>
        )
    }



    return (

        <div>
            <div className="row py-5 px-4 customProfileSize">
                <div className="col-md-5 mx-auto">
                    {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 cover">
                            <div className="media  profile-head">
                                <div className="profile mr-3">
                                    <img src="https://icons-for-free.com/iconfiles/png/512/man+person+profile+user+worker+icon-1320190557331309792.png" alt="person logo" width={130} className="rounded img-thumbnail" /> 
                                <h3 className='customH3UserName'>
                                {`Hello ${loggedUser[0].username} !`}
                                </h3>
                                </div>
                                <div className="media-body mb-5 text-white mt-5 "
                                    style={{ textAlign: 'center' }}>
                                </div>
                            </div>
                        </div>

                        <div className="px-4">
                            <h5 className="mb-4">User Profile:</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">Name: {`${loggedUser[0].username}`}</p>
                                <p className="font-italic mb-0">Email: {loggedUser[0].email}</p>

                            </div>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Your Bookings:</h5>
                            </div>
                            {bookingstable}

                        </div>
                    </div>
                </div>
            </div>




        </div>

    )

}

export default Profile
