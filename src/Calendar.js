import React, { useState } from "react";
import * as dateFns from "date-fns";
import "./Calendar.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const Calendar = () => {
  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="cal-header">
        <ChevronLeftIcon onClick={prevMonth}></ChevronLeftIcon>
        <div className="header-date">
          <span>{dateFns.format(currentDate, dateFormat)}</span>
        </div>
        <ChevronRight onClick={nextMonth}></ChevronRight>
      </div>
    );
  };
  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  const days = () => {
    const dateFormat = "EEEEEE";
    const days = [];
    let startDate = dateFns.startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day-name" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days-names">{days}</div>;
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const renderCells = () => {
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`week-cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            {/* <span className="bg">{formattedDate}</span> */}
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="week-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{days()}</div>
      <div>{renderCells()}</div>
    </div>
  );
};

export default Calendar;
