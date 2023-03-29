const renderCalendar = (currentMonth, year, today, Feriados, handleDayClick) => {
    //Renderiza os dias de um mês
    const monthDays = [
      31,
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
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
  
    const firstDay = new Date(year, currentMonth, 1).getDay();
    const blanks = [];
  
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<td key={`empty-${i}`} className="empty"></td>);
    }
  
    const days = [];
    for (let i = 1; i <= monthDays[currentMonth]; i++) {
      const currentDate = new Date(year, currentMonth, i);
      const isToday = currentDate.toDateString() === today.toDateString();
      const isHoliday = Feriados.some(
        (feriado) => feriado.date === currentDate.toISOString().slice(0, 10)
      );
  
      // Encontra o objeto de feriado correspondente à data atual
      const currentHoliday = Feriados.find(
        (feriado) => feriado.date === currentDate.toISOString().slice(0, 10)
      );
  
      // Cria um elemento <div> para exibir o ícone e o número do dia
      const dayElement = (
        <div className="day-inner">
          <div className="day-icon">{currentHoliday && currentHoliday.icon}</div>
          <div className="day-number">{i}</div>
        </div>
      );
  
      // Cria a <td> para o dia atual
      const dayCell = (
        <td
          key={`day-${i}`}
          className={`day${isToday ? " today" : ""}${isHoliday ? " holiday" : ""}`}
          onClick={(e) => handleDayClick(currentDate, e)}
        >
          {dayElement}
        </td>
      );
  
      days.push(dayCell);
    }
  
    const totalSlots = [...blanks, ...days];
    const rows = [];
    let cells = [];
  
    totalSlots.forEach((slot, i) => {
      if (i % 7 !== 0) {
        cells.push(slot);
      } else {
        // Adiciona células vazias no início das semanas para lidar com o primeiro dia da semana
        if (cells.length === 0 && i < 7) {
          for (let j = 0; j < firstDay; j++) {
            cells.push(<td key={`empty-${j}`} className="empty"></td>);
          }
        }
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

  export default renderCalendar;