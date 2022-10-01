import React from "react";
import { ServiceList } from "./Service.styled";
import ServiceItem from "./ServiceItem/ServiceItem.component";
const services = [1, 2, 3, 4];

const Service = () => {
  const onChangeHandler = (e) => {
    console.log(e);
  };
  return (
    <ServiceList>
      {services.map((data) => {
        return <ServiceItem onChange={onChangeHandler} />;
      })}
    </ServiceList>
  );
};

export default Service;
