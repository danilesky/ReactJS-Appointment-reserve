import React from "react";
import { Calendar as DatePicker } from "react-calendar";
import { formatDate } from "../../../infrastructure/functions/formatDate";
import TileInfo from "./TileInfo";

//24071998 - dateDay data

const Calendar = () => {
  //Todays date
  const currentDate = new Date();

  //Function that disables past day tiles
  const disableTiles = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  //Function to generate number of FREE APPOINTMENTS for each day under DAYtileContent

  return (
    <DatePicker
      onClickDay={(day) => console.log(formatDate(day))}
      tileDisabled={disableTiles}
      tileContent={TileInfo}
    />
  );
};

export default Calendar;
