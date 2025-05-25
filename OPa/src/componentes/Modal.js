import React from "react";

//modal para adicionar tarefas
const Modal = ({ showModal, fecharModal, cadastrarTarefa, novaTarefa, setNovaTarefa, novaCor, setNovaCor }) => {
  if (!showModal) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Adicionar Tarefa</h5>
            <button type="button" className="btn-close" onClick={fecharModal}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Nome da tarefa"
              value={novaTarefa}
              onChange={(e) => setNovaTarefa(e.target.value)}
            />

          </div>
          <div className="modal-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <input
              id="meuSeletorDeCor"
              type="color"
              value={novaCor}
              onChange={(e) => setNovaCor(e.target.value)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10%',
                padding: '0',
                border: '2px solidrgb(0, 0, 0)',
                cursor: 'pointer',
                marginRight: 'auto',
                overflow: 'hidden'
              }}
            />
            <button type="button" className="btn btn-secondary" onClick={fecharModal} style={{ marginRight: '8px' }}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={cadastrarTarefa}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;