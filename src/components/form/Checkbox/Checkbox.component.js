import React, { useState, useEffect } from "react";
import { Input } from "./Checkbox.styled";

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
