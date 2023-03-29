//Funções para controle do calendário

export const handlePrevMonthClick = (currentMonth, year, setCurrentMonth, setYear, setDate, setAnimationClass) => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setYear(year - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setDate(new Date(year, currentMonth - 1));
    setAnimationClass("slide-left");
    setTimeout(() => setAnimationClass(""), 200);
  };
  
export const handleNextMonthClick = (currentMonth, year, setCurrentMonth, setYear, setDate, setAnimationClass) => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setYear(year + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setDate(new Date(year, currentMonth + 1));
    setAnimationClass("slide-right");
    setTimeout(() => setAnimationClass(""), 200);
  };

  export const handleDayClick = (currentDate, Feriados, setSelectedDate, setClickPosition, event) => {
    const isHoliday = Feriados.some(
      (feriado) => feriado.date === currentDate.toISOString().slice(0, 10)
    );
    setSelectedDate({
      date: currentDate,
      isHoliday: isHoliday,
    });
    setClickPosition({ x: event.clientX, y: event.clientY });
  };
  