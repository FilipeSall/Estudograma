import React, { useEffect, useState } from "react";
import "./Calendar.css";
import Modal from "../modal/Modal.js";
import getFeriadosByYear from "./Feriados.js";
import CalendarHeader from "./Header";
import CalendarTable from "./Table";
import {
  handlePrevMonthClick,
  handleNextMonthClick,
  handleDayClick,
} from "./Functions.js";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [feriados, setFeriados] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState(new Date(year, currentMonth));
  const [animationClass, setAnimationClass] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: null, y: null });

  const today = new Date();

  console.log(clickPosition)

  useEffect(() => {
    const feriadosDoAno = getFeriadosByYear(year);
    setFeriados(feriadosDoAno);
  }, [year]);

  // Obtém a data formatada para exibir no topo do calendário
  const formattedDate = new Date(
    date.getFullYear(),
    currentMonth
  ).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });


  //Move o calendario para o proximo mes ou para o anterior
  const handlePrevClick = () => {
    handlePrevMonthClick(
      currentMonth,
      year,
      setCurrentMonth,
      setYear,
      setDate,
      setAnimationClass
    );
  };

  const handleNextClick = () => {
    handleNextMonthClick(
      currentMonth,
      year,
      setCurrentMonth,
      setYear,
      setDate,
      setAnimationClass
    );
  };
  console.log(clickPosition)
  //Verifica se o dia clicado tem feriado abrindo um modal com as informações
  const handleDayClickWrapper = (currentDate, event) => {
    handleDayClick(
      setClickPosition,
      currentDate,
      feriados,
      setSelectedDate,
      event,
      clickPosition
    );
  };
  
  return (
    <div className="calendar">
      <CalendarHeader
        formattedDate={formattedDate}
        handlePrevMonthClick={handlePrevClick}
        handleNextMonthClick={handleNextClick}
      />
      <CalendarTable
        animationClass={animationClass}
        currentMonth={currentMonth}
        year={year}
        today={today}
        Feriados={feriados}
        handleDayClick={handleDayClickWrapper}
      />
      {selectedDate && (
        <Modal
        onClose={() => setSelectedDate(null)}
        x={clickPosition?.x ?? 0}
        y={clickPosition?.y ?? 0}
        >
          <div className="modal-content">
            {selectedDate.isHoliday && (
              <div className="icon">
                {
                  feriados.find(
                    (feriado) =>
                      feriado.date ===
                      selectedDate.date.toISOString().slice(0, 10)
                  ).icon
                }
              </div>
            )}
            <h2>{selectedDate.date.toLocaleDateString("pt-BR")}</h2>
            {selectedDate.isHoliday ? (
              <>
                <p>
                  {
                    feriados.find(
                      (feriado) =>
                        feriado.date ===
                        selectedDate.date.toISOString().slice(0, 10)
                    ).name
                  }
                </p>
              </>
            ) : (
              <p>Não há feriados!</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Calendar;
