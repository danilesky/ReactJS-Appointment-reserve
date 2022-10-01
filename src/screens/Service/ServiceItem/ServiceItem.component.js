import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "../../../components/form/Checkbox/Checkbox.component";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.default.dark};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.default.grey};
  margin: ${({ theme }) => theme.space[0]};
`;
const Pricing = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.default.dark};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

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
