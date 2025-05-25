import React from 'react';
import ScheduleItem from './ScheduleItem.js';

// Dados mock para agendamentos (substituir por dados reais do backend no futuro)
const mockSchedules = [
  { id: 'sch-1', name: 'Reunião de Equipe', type: 'Serviços em Grupo', date: '4 de Maio, 2020', color: '#0d6efd' },
  { id: 'sch-2', name: 'Chamada com Cliente', type: 'Chamada de Cliente', date: '5 de Maio, 2020', color: '#dc3545' },
  { id: 'sch-3', name: 'Revisão de Projeto', type: 'Revisão de Projeto', date: '6 de Maio, 2020', color: '#ffc107' },
];

function ScheduleLista() {
  return (
    <div className="bg-dark rounded p-4 shadow-sm h-100">
      <h4 className="text-white mb-4">Agendamentos</h4>
      <div className="d-flex flex-column gap-3">
        {mockSchedules.map(schedule => (
          <ScheduleItem
            key={schedule.id}
            id={schedule.id}
            name={schedule.name}
            type={schedule.type}
            date={schedule.date}
            color={schedule.color}
          />
        ))}
      </div>
    </div>
  );
}

export default ScheduleLista;