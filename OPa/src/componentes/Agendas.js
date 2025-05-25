import React from 'react';

// componente individual de agendamento
function ScheduleItem({ id, name, type, date, color }) {
  return (
    <div
      className="bg-dark rounded p-4 mb-3 shadow-sm d-flex align-items-center"
      style={{ borderLeft: `5px solid ${color || "#0d6efd"}` }} // Borda colorida à esquerda
    >
      {/* Ícone de calendário (Placeholder) */}
      <div className="me-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-calendar-event text-white"
          viewBox="0 0 16 16"
        >
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
      </div>
      {/* Detalhes do agendamento */}
      <div className="flex-grow-1">
        <h6 className="text-white fw-semibold mb-0">{name}</h6>
        <p className="text-muted small mb-0">{type}</p>
        <p className="text-info small mb-0">{date}</p>
      </div>
      {/* Botão de reticências */}
      <div>
        <button className="btn btn-link text-white p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ScheduleItem;