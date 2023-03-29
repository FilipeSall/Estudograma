import React from "react";
import './Calendar.css';
import { FcNext, FcPrevious } from "react-icons/fc";
function CalendarHeader({ formattedDate, handlePrevMonthClick, handleNextMonthClick }) {
  return (
    <div className="calendar-header">
      <button className="button__calendar" onClick={handlePrevMonthClick}>
        {<FcPrevious />}
      </button>
      <h1>{formattedDate}</h1>
      <button className="button__calendar" onClick={handleNextMonthClick}>
        {<FcNext />}
      </button>
    </div>
  );
}

export default CalendarHeader;
