import React from 'react';

import './Profile.css';

const Profile = () => {

    // fetch user's data from local
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(loggedUser);

    let bookingstable = null;
    if (localStorage.getItem('timeOfCourse')) {
        let bookings = JSON.parse(localStorage.getItem('timeOfCourse'));
        bookingstable = (
            <div className='customProfile'>
                <div className="detailsTable">
                    <h4>Course name</h4>
                    <h4>Start Date</h4>
                    <h4>End Date</h4>
                    <h4>Time</h4>
                </div>
                {bookings.map((booking, id) => {
                    return (<>
                        <div className="detailsTable">
                            <h5>{bookings[id].Title}</h5>
                            <h5>{bookings[id].startDate}</h5>
                            <h5>{bookings[id].endDate}</h5>
                            <h5>{bookings[id].time}</h5>

                        </div>
                    </>
                    )

                })}
            </div>
        )
    }



    return (
        <div className='profileCont'>

            <h1 className='header'>Profile</h1>
            <div className='profileContainer'>
                <div className="userContainer">
                    <div className="detailsUser">
                        <p> Hello {`${loggedUser[0].username}`}😃😃</p>
                        <p>Email: {loggedUser[0].email}</p>

                    </div>
                </div>
                <div className="BookingsContaiiner">
                    <div className="Bookings">
                        <h3>Your Bookings:</h3>
                    </div>
                    {bookingstable}
                </div>
            </div>
        </div>
    )
}

export default Profile
