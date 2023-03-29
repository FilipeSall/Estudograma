import React from "react";
import "./Calendar.css";
import renderCalendar from "./RenderCalendar";


function CalendarTable({ animationClass, currentMonth, year, today, Feriados, handleDayClick }) {
    return (
      <table className={`${animationClass}`}>
        <thead>
          <tr>
            <th>Dom</th>
            <th>Seg</th>
            <th>Ter</th>
            <th>Qua</th>
            <th>Qui</th>
            <th>Sex</th>
            <th>Sab</th>
          </tr>
        </thead>
        <tbody>{renderCalendar(currentMonth, year, today, Feriados, handleDayClick)}</tbody>
      </table>
    );
  }
  


export default CalendarTable;