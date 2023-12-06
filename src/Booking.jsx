import React from 'react'
import "./Booking.css"
import { IoBedOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function Booking() {
  return (
    <div className='booking'>
        <div className="container">
            <div className="column">
                <IoBedOutline />
                <span>Where are you going?</span>
            </div>
            <div className="column">
            <SlCalender />
                <span>Check In Date - Check Out Date</span>
            </div>
            <div className="column">
            <IoPersonOutline />
                <span>2 adults - 0 children - 1 room</span>
                <span className='dropdown'><FaAngleDown/></span>
            </div>
            <button className='btn'>Search</button>
        </div>
    </div>
  )
}

export default Booking