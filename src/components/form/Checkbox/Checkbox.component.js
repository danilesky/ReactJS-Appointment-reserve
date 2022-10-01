import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const Checkbox = ({ onChange, isChecked }) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked((prevCheck) => {
      onChange(!prevCheck);
      return !prevCheck;
    });
  };

  useEffect(() => setChecked(isChecked), [isChecked]);

  return <Input type="checkbox" checked={checked} onChange={checkHandler} />;
};

export default Checkbox;
