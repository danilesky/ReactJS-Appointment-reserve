import React from "react";
import styled from "styled-components";
import { formatDate } from "../../../infrastructure/functions/formatDate";

const appointments = [
  {
    day: "041022",
    free: [1, 2],
  },
  {
    day: "051022",
    free: [1, 2, 3, 4, 5, 6],
  },
  {
    day: "061022",
    free: [1, 2, 3, 4],
  },
  {
    day: "071022",
    free: [1, 2, 3, 4, 5],
  },
];

const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.default.grey};
`;

const TileInfo = ({ date }) => {
  let formatedDate = formatDate(date);
  let counter = 0;
  appointments.map((appointment) => {
    if (appointment.day === formatedDate) {
      appointment.free.map(() => {
        counter++;
      });
    }
  });
  return <Value>{counter}</Value>;
};

export default TileInfo;
