import React from "react";
import { Calendar as DatePicker } from "react-calendar";
import { formatDate } from "../../../infrastructure/functions/formatDate";

//24071998 - dateDay data

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

const Calendar = () => {
  //Todays date
  const currentDate = new Date();

  //Function that disables past day tiles
  const disableTiles = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  //Function to generate number of FREE APPOINTMENTS for each day under DAYtileContent
  const tileContent = ({ date }) => {
    let formatedDate = formatDate(date);
    let counter = 0;
    appointments.map((appointment) => {
      if (appointment.day === formatedDate) {
        appointment.free.map(() => {
          counter++;
        });
      }
    });
    return <p>{counter}</p>;
  };
  return (
    <DatePicker
      onClickDay={(day) => console.log(formatDate(day))}
      tileDisabled={disableTiles}
      tileContent={tileContent}
    />
  );
};

export default Calendar;
