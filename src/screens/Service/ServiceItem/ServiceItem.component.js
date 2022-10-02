import React, { useEffect, useState } from "react";
import Checkbox from "../../../components/form/Checkbox/Checkbox.component";

import {
  Wrapper,
  Info,
  Title,
  Pricing,
  Description,
} from "./ServiceItem.styled";

const ServiceItem = ({ onChange, data }) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked((checked) => {
      onChange(!checked, data);
      return !checked;
    });
  };
  useEffect(() => {
    setChecked(data.isChecked);
  }, [data.isChecked]);
  return (
    <Wrapper onClick={checkHandler}>
      <Checkbox type="checkbox" isChecked={checked} onChange={() => true} />
      <Info>
        <Title>{data.title}</Title>
        <Pricing>{data.priceHours}</Pricing>
        <Description>{data.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default ServiceItem;
