import React from "react";
import styled from "styled-components";
import ServiceItem from "./ServiceItem/ServiceItem.component";

const services = [1, 2, 3, 4];

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

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
