import React, { useContext } from "react";
import { ServicesContext } from "../../services/Services/services.context";
import { ServiceList } from "./Service.styled";
import ServiceItem from "./ServiceItem/ServiceItem.component";

const Service = () => {
  const { services, setServices, error, loading } = useContext(ServicesContext);
  const onChangeHandler = (value) => {
    setServices((prevServices) => {
      const newServices = prevServices.map((service) => {
        return { ...service, isChecked: value };
      });
      return newServices;
    });
    console.log(services);
  };
  return (
    <ServiceList>
      {services.map((service) => {
        return <ServiceItem data={service} onChange={onChangeHandler} />;
      })}
    </ServiceList>
  );
};

export default Service;
