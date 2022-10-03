import React from "react";
import { Calendar as DatePicker } from "react-calendar";

//24071998 - dateDay data

const appointments = [
  {
    day: "04102022",
    free: [1, 2],
  },
  {
    day: "05102022",
    free: [1, 2, 3, 4, 5, 6],
  },
  {
    day: "06102022",
    free: [1, 2, 3, 4],
  },
  {
    day: "07102022",
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
  const tileContent = ({ date }) => {};
  return <DatePicker tileDisabled={disableTiles} tileContent={tileContent} />;
};

export default Calendar;
