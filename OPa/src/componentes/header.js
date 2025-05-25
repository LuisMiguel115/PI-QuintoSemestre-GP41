const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary text-white p-3 mb-4 rounded shadow-sm">

      <h2 className="mb-0 ml-5 p-1">Dashboard</h2>
      <div className="input-group w-50 me-3">

        <span className="input-group-text bg-gray-900 border-0 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.12c.075.101.154.204.233.307l3.956 3.956a.5.5 0 0 0 .708-.708l-3.956-3.956a.5.5 0 0 0-.12-.085zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </span>

        <input
          type="text"
          placeholder="Q Task List, Scheduling, etc..."
          className="form-control bg-gray-900 text-white border-0"
          aria-label="Search"
        />
      </div>

      <div className="d-flex align-items-center">
        {/* Ícones de Notificação */}
        <div className="d-flex me-4">
          {/* Ícone de Sino (SVG) */}
          <button className="btn btn-link text-white p-0 me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
          </button>

          <button className="btn btn-link text-white p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </button>
        </div>


        <div className="d-flex align-items-center">
          <span className="me-2 fw-semibold">João Vieira</span>
          <div className="rounded-circle bg-info d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '0.875rem', fontWeight: 'bold' }}>
            JV
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;