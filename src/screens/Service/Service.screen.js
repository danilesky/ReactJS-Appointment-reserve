import React, { useContext } from "react";
import { ServicesContext } from "../../services/Services/services.context";
import { ServiceList } from "./Service.styled";
import ServiceItem from "./ServiceItem/ServiceItem.component";

const Service = () => {
  const { services, setServices, error, loading } = useContext(ServicesContext);
  const onChangeHandler = (e) => {
    console.log(e);
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
