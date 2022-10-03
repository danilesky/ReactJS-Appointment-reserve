import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../../components/calendar/Calendar/Calendar";
import { ServicesContext } from "../../services/Services/services.context";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const { services } = useContext(ServicesContext);

  //disable past days

  return (
    <div>
      Booking
      <Calendar />
      <Link to="/">Booking</Link>
    </div>
  );
};

export default Booking;
