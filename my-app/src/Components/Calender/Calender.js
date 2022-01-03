import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calender.css";

function Calender(props) {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let year = today.getFullYear();

  let minDateValue = year + "-" + month + "-" + day;
  let Course = JSON.parse(localStorage.getItem("Courses"));
  const [enteredDateFirst, setEnteredDateFirst] = useState({
    enteredDateFirst: minDateValue,
  });
  const [enteredDateEnd, setEnteredDateEnd] = useState("");
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    time: "",
    Title:Course.title,
    id: 0,
  });
  const fullTimeSlots = [
    { text: "Please Select", value: "" },
    { text: "08-09", value: "08-09" },
    { text: "09-10", value: "09-10" },
    { text: "10-11", value: "10-11" },
    { text: "12-13", value: "12-13" },
    { text: "13-14", value: "13-14" },
  ];
  const [timeSlots, setTimeSlots] = useState(fullTimeSlots);
  const [minEndDate, setMinEndDate] = useState(minDateValue);

  const dateChangeHandlerFirst = (e, attr) => {
    setEnteredDateFirst(e.target.value);
    console.log(enteredDateFirst);
    setForm({ ...form, [attr]: e.target.value });
    setTimeSlots(fullTimeSlots);
  };
  const handelSelect = (e, attr) => {
    setForm({ ...form, [attr]: e.target.value });
  };
  const dateChangeHandlerLast = (e, attr) => {
    setTimeSlots(fullTimeSlots);
    setEnteredDateEnd(e.target.value);
    // get the value from the array of items to check the selected dates and time .
    let ourArray = localStorage.getItem("timeOfCourse")
      ? JSON.parse(localStorage.getItem("timeOfCourse"))
      : [];
    if (ourArray.length > 0) {
      let filteredArray = ourArray.filter((element) => {
        // get intersection cases.
        let isIntersected =
          (stringToDate(element.startDate) <= stringToDate(enteredDateFirst) &&
            stringToDate(element.endDate) > stringToDate(enteredDateFirst)) ||
          (stringToDate(element.startDate) < stringToDate(enteredDateEnd) &&
            stringToDate(element.endDate) > stringToDate(enteredDateEnd)) ||
          (stringToDate(element.startDate) >= stringToDate(enteredDateFirst) &&
            stringToDate(element.endDate) <= stringToDate(enteredDateEnd)) ||
          (stringToDate(element.startDate) <= stringToDate(enteredDateFirst) &&
            stringToDate(element.endDate) >= stringToDate(enteredDateEnd));
        return isIntersected;
      });
      console.log("intersected list");
      console.log(filteredArray);
      // remove intersected periods.
      let resultTimeSlots = timeSlots;
      filteredArray.forEach((element) => {
        let filteredTimes = timeSlots.filter((timeElement) => {
          console.log(timeElement.value + " ---  " + element.time);
          return timeElement.value === element.time;
        });

        console.log("filtered times");
        console.log(filteredTimes);
        // if there is intersected timeslot remove the intersected time
        if (filteredTimes.length > 0) {
          let index = resultTimeSlots.indexOf(filteredTimes[0]);
          resultTimeSlots.splice(index, 1);
        }
      });
      setTimeSlots(resultTimeSlots);
      console.log("result after complete");
      console.log(resultTimeSlots);
    }
    setForm({ ...form, [attr]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // get the saved array from local storage, if no data was saved, create empty array.
    let ourArray = localStorage.getItem("timeOfCourse")
      ? JSON.parse(localStorage.getItem("timeOfCourse"))
      : [];

    // *****************
    setForm({ ...form, Title:Course.title });

    ourArray.push(form);
    localStorage.setItem("timeOfCourse", JSON.stringify(ourArray));
    const checkLogInUser = localStorage.getItem("uerLogin");
    console.log(checkLogInUser);

    if (checkLogInUser !== null) {
      console.log("go");
      props.handelUseNavigate();
    } else {
      console.log("no");
      props.handelUseNavigate();
    }
    setEnteredDateFirst("");
    setEnteredDateEnd("");
    setForm({ ...form, time: "" });

    console.log(enteredDateFirst);
    console.log(enteredDateEnd);
    console.log(form);
  };
  const stringToDate = (stringDate) => {
    let stringDateValues = ("" + stringDate).split("-");
    let dateValue = new Date(
      stringDateValues[0],
      Number(stringDateValues[1]) - 1,
      stringDateValues[2]
    );
    return dateValue;
  };

  return (
    <div className="calender-controls">
      <div className="render-calender-form">
        <form onSubmit={handelSubmit} className="calender-form">
          <div className="label-container">
            <label> Starting Date</label>
          </div>
          <input
            type="date"
            min={minDateValue}
            max="2026-12-31"
            value={enteredDateFirst}
            onChange={(e) => {
              dateChangeHandlerFirst(e, "startDate");
            }}
            required
          />
          <div className="label-container">
            <label> Ending Date</label>
          </div>
          <input
            type="date"
            min={enteredDateFirst}
            max="2026-12-31"
            value={enteredDateEnd}
            onChange={(e) => {
              dateChangeHandlerLast(e, "endDate");
            }}
            required
          />
          <div className="label-container">
            <label> Select Time</label>
          </div>
          <select
            className="time-slots-input"
            onChange={(e) => {
              handelSelect(e, "time");
            }}
            required
            value={form.time}
          >
            {timeSlots.map((item) => {
              return <option value={item.value}>{item.text}</option>;
            })}
          </select>
          <button className="submit-calender">Submit </button>
        </form>{" "}
      </div>
    </div>
  );
}
export default Calender;