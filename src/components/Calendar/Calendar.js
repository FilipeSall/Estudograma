import React, { useState } from "react";
import "./Calendar.css";
import { FcNext, FcPrevious } from "react-icons/fc";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [animationClass, setAnimationClass] = useState("");

  // Obtém a data formatada para exibir no topo do calendário
  const formattedDate = date.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  const handlePrevMonthClick = () => {
    setCurrentMonth(currentMonth - 1);
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    setAnimationClass("slide-left");
    setTimeout(() => setAnimationClass(""), 200);
  };

  const handleNextMonthClick = () => {
    setCurrentMonth(currentMonth + 1);
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    setAnimationClass("slide-right");
    setTimeout(() => setAnimationClass(""), 200);
  };

  const renderCalendar = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const monthDays = [
      31,
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 === 0
        ? 29
        : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const blanks = [];

    for (let i = 0; i < firstDay; i++) {
      blanks.push(<td key={`empty-${i}`} className="empty"></td>);
    }

    const days = [];
    for (let i = 1; i <= monthDays[currentMonth]; i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const isToday = currentDate.toDateString() === today.toDateString();
      days.push(
        <td key={`day-${i}`} className={`day${isToday ? " today" : ""}`}>
          {i}
        </td>
      );
    }

    const totalSlots = [...blanks, ...days];
    const rows = [];
    let cells = [];

    totalSlots.forEach((slot, i) => {
      if (i % 7 !== 0) {
        cells.push(slot);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(slot);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((row, i) => {
      return <tr key={`row-${i}`}>{row}</tr>;
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="button__calendar" onClick={handlePrevMonthClick}>
          {<FcPrevious />}
        </button>
        <h1>{formattedDate}</h1>
        <button className="button__calendar" onClick={handleNextMonthClick}>
          {<FcNext />}
        </button>
      </div>
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
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
