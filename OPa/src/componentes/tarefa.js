import React from 'react'

function Tarefa({tarefa, onDelete, onComplete}) {
    return(
        <div className="card p-3 mb-2"
            style={{border: `10px solid ${tarefa.cor || "0#d6efd"}`}}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5 style={{ textDecoration: tarefa.completa ? 'line-through' : 'none' }}>
                        {tarefa.nome}
                    </h5>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={() => onComplete(tarefa.id)}>
                        ✅
                    </button>
                    <button className="btn btn-danger" onClick={() => onDelete(tarefa.id)}>
                        ❌
                    </button>
                </div>
            </div>
        </div>
    );
}
    
export default Tarefa;