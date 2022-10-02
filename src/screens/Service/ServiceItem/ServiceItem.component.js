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

  return (
    <Wrapper onClick={() => setChecked(!checked)}>
      <Checkbox type="checkbox" isChecked={checked} onChange={onChange} />
      <Info>
        <Title>{data.title}</Title>
        <Pricing>{data.priceHours}</Pricing>
        <Description>{data.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default ServiceItem;
