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
        <Title>Pánsky strih</Title>
        <Pricing>Cena : 30$ , Čas : 1:30hod.</Pricing>
        <Description>
          Klasický pánsky strih s bradou , dostanete plný servis s bradou ,
          všetko je uvedené v cene , náš barber sa o vás postará so všetkým čo
          budete potrebovať
        </Description>
      </Info>
    </Wrapper>
  );
};

export default ServiceItem;
