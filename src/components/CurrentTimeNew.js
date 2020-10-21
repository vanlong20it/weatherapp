import React from "react";

const CurrentTimeNew = () => {
  const [time, setTime] = React.useState(new Date());
  const [day, setDay] = React.useState(new Date().getDate());
  const [month, setMonth] = React.useState(new Date().getMonth() + 1);
  const [year, setYear] = React.useState(new Date().getFullYear());
  setInterval(() => {
    setTime(new Date());
    setDay(new Date().getDate());
    setMonth(new Date().getMonth() + 1);
    setYear(new Date().getFullYear());
  }, 1000);
  return (
    <React.Fragment>
      <p>{time.toLocaleTimeString()}, ngày {day}, tháng {month}, năm {year}</p>
    </React.Fragment>
  );
};

export default CurrentTimeNew;
