const ModalContent = ({ selectedDate, feriados }) => {
    return (
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
        <h2>{selectedDate.date.toLocaleDateString('pt-BR')}</h2>
        {selectedDate.isHoliday ? (
          <p>
            {
              feriados.find(
                (feriado) =>
                  feriado.date ===
                  selectedDate.date.toISOString().slice(0, 10)
              ).name
            }
          </p>
        ) : (
          <p>Não há feriados!</p>
        )}
      </div>
    );
  };

  export default ModalContent