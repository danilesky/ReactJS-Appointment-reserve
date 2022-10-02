import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Calendar from "../../components/calendar/Calendar/Calendar";
import { ServicesContext } from "../../services/Services/services.context";

const Booking = () => {
  const { services } = useContext(ServicesContext);
  return (
    <div>
      Booking
      <Calendar />
    </div>
  );
};

export default Booking;
