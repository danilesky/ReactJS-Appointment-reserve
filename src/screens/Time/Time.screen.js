import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../services/Services/services.context";

const Time = () => {
  const { services } = useContext(ServicesContext);
  return (
    <div>
      Time
      <Link to="/">Service</Link>
    </div>
  );
};

export default Time;
