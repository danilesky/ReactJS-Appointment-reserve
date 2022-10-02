import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../services/Services/services.context";
import { ServiceList } from "./Service.styled";
import ServiceItem from "./ServiceItem/ServiceItem.component";

const Service = () => {
  const { services, setServices, error, loading } = useContext(ServicesContext);
  const onChangeHandler = (value, data) => {
    setServices((prevServices) => {
      const newServices = prevServices.map((service) => {
        if (data.id === service.id) {
          return { ...service, isChecked: value };
        } else {
          return { ...service };
        }
      });
      return newServices;
    });
  };
  return (
    <ServiceList>
      {services.map((service) => {
        return (
          <ServiceItem
            key={service.id}
            data={service}
            onChange={onChangeHandler}
          />
        );
      })}
      <Link to="/booking">Booking</Link>
    </ServiceList>
  );
};

export default Service;
