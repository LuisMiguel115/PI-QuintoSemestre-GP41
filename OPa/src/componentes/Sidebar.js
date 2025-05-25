import React from "react";

function Sidebar({ activeMenuItem, setActiveMenuItem }) {
    return (
        <div className="bg-dark p-4" style={{ width: "250px", borderRight: "1px solid #343a40" }}> {/* Adicionado borda para separação */}
            <h4 className="text-white mb-4">TodoHub</h4>
            <ul className="nav flex-column mt-4">
            <li className="nav-item mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Dashboard')}
                >
                {/*icone dashboard*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3A1.5 1.5 0 0 1 15 10.5v3A1.5 1.5 0 0 1 13.5 15h-3A1.5 1.5 0 0 1 9 13.5z"/>
                </svg>
                Dashboard
                </button>
            </li>
            <li className="nav-item mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Task List' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Task List')}
                >
                {/* ícone lista de tadefas */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.07-1.05l2.22 2.22z"/>
                </svg>
                Task List
                </button>
            </li>
            <li className="nav-item mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Scheduling' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Scheduling')}
                >
                {/* ícone agendamento */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                Scheduling
                </button>
            </li>
            <li className="nav-item mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Notification' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Notification')}
                >
                {/* ícone notificação */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                </svg>
                Notification
                </button>
            </li>
            <li className="nav-item mt-4 mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'My Profile' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('My Profile')}
                >
                {/* icone do perlfl */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                My Profile
                </button>
            </li>
            <li className="nav-item mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Settings' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Settings')}
                >
                {/* icone configurações */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.002a.5.5 0 0 1 .14.54l-1.002 4.008a.5.5 0 0 1-.952-.238L8.595 1.26a.5.5 0 0 1 .81-.258zM16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z"/>
                </svg>
                Settings
                </button>
            </li>
            <li className="nav-item mt-4 mb-2">
                <button
                className={`nav-link btn btn-dark text-start w-100 d-flex align-items-center gap-2 sidebar-nav-link ${activeMenuItem === 'Help & Support' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('Help & Support')}
                >
                {/* Ícone auda e suporte */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033a.25.25 0 0 0-.247.067L3.397 9.182a.25.25 0 0 0 .19.416h.923c.082 0 .163-.03.22-.08l2.607-2.607a.25.25 0 0 0 0-.354l-.098-.098a.25.25 0 0 0-.354 0z"/>
                </svg>
                Help & Support
                </button>
            </li>
            </ul>
        </div>
    )
}
export default Sidebar;