import moment from "moment";

export const formatDate = (value) => {
  const day = moment(value).format("DD");
  let month = moment(value).format("MM");
  const year = moment(value).format("YY");

  //convert month string to number
  month = Number(month);

  //converting month numbers to ou month number December -12 , January-1
  month = month - 1;

  //December
  if (month === 0) {
    month = 12;
  }

  //Convert numbers date  to string with 0
  if (month < 10) {
    month = `0${month.toString()}`;
  } else {
    month = month.toString();
  }

  const formatedDate = `${day + month + year}`;

  return formatedDate;
};
