// import React from "react";
// import Dashboard from "./components/Dashboard";
// import TicketFollowUp from "./components/TicketFollowUp";
// import HelpdeskChat from "./components/HelpdeskChat";
// import ContactHelpdesk from "./components/ContactHelpdesk";
// import AgentDashboard from "./components/AgentDashboard";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Dashboard</Link> |{" "}
//         <Link to="/ticket-followup">Suivi ticket</Link> |{" "}
//         <Link to="/contact">Contact</Link> |{" "}
//         <Link to="/agent-dashboard">Dashboard Agent</Link>
//       </nav>
//       <HelpdeskChat /> {/* Chat accessible partout */}
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/ticket-followup" element={<TicketFollowUp />} />
//         <Route path="/contact" element={<ContactHelpdesk />} />
//         <Route path="/agent-dashboard" element={<AgentDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import TicketFollowUp from "./components/TicketFollowUp";
import HelpdeskChat from "./components/HelpdeskChat";
import ContactHelpdesk from "./components/ContactHelpdesk";
import AgentDashboard from "./components/AgentDashboard";
import Login from "./components/Login";
<<<<<<< HEAD:frontend/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const role = localStorage.getItem("role"); // 🔑 récupération du rôle
=======
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdminPanel from './components/AdminPanel';

const parseToken = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return {};
    const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(atob(b64).split('').map(c => '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(json);
  } catch (e) { return {}; }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);
>>>>>>> b5160007537f6b502fdbf07e4b39476c72bc53cd:src/App.jsx

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // 🔑 on enlève aussi le rôle à la déconnexion
    setIsLoggedIn(false);
  };

  const navLinkStyle = {
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    transition: "background-color 0.2s ease, color 0.2s ease",
  };

  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const navBarStyle = {
    display: "flex",
    gap: "0.5rem",
    padding: "1rem 2rem",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  };

  const token = localStorage.getItem('token');
  const payload = token ? parseToken(token) : {};
  const isAdmin = !!payload.isAdmin;

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <header style={navBarStyle}>
            <NavLink to="/" style={navLinkStyle} end activeStyle={activeStyle}>
              Dashboard
            </NavLink>
<<<<<<< HEAD:frontend/App.jsx

            {/* 🔑 Différentes options selon le rôle */}
            {role === "admin" && (
              <>
                <NavLink
                  to="/agent-dashboard"
                  style={navLinkStyle}
                  activeStyle={activeStyle}
                >
                  Dashboard Agent
                </NavLink>
                <NavLink
                  to="/ticket-followup"
                  style={navLinkStyle}
                  activeStyle={activeStyle}
                >
                  Suivi ticket
                </NavLink>
              </>
            )}

            {role === "technicien" && (
              <NavLink
                to="/ticket-followup"
                style={navLinkStyle}
                activeStyle={activeStyle}
              >
                Suivi ticket
              </NavLink>
            )}

            {role === "client" && (
              <NavLink
                to="/contact"
                style={navLinkStyle}
                activeStyle={activeStyle}
              >
                Contact
              </NavLink>
            )}

=======
            <NavLink
              to="/ticket-followup"
              style={navLinkStyle}
              activeStyle={activeStyle}
            >
              Suivi ticket
            </NavLink>
            <NavLink
              to="/contact"
              style={navLinkStyle}
              activeStyle={activeStyle}
            >
              Contact
            </NavLink>
            <NavLink
              to="/agent-dashboard"
              style={navLinkStyle}
              activeStyle={activeStyle}
            >
              Dashboard Agent
            </NavLink>
            {isAdmin && (
              <NavLink to="/admin" style={navLinkStyle} activeStyle={activeStyle}>Admin</NavLink>
            )}
>>>>>>> b5160007537f6b502fdbf07e4b39476c72bc53cd:src/App.jsx
            <button onClick={handleLogout}>Déconnexion</button>
          </header>

          {/* Chat visible pour tous */}
          <HelpdeskChat />

          <main style={{ padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD:frontend/App.jsx

              {role === "admin" && (
                <>
                  <Route path="/ticket-followup" element={<TicketFollowUp />} />
                  <Route path="/agent-dashboard" element={<AgentDashboard />} />
                </>
              )}

              {role === "technicien" && (
                <Route path="/ticket-followup" element={<TicketFollowUp />} />
              )}

              {role === "client" && (
                <Route path="/contact" element={<ContactHelpdesk />} />
=======
              <Route path="/ticket-followup" element={<TicketFollowUp />} />
              <Route path="/contact" element={<ContactHelpdesk />} />
              <Route path="/agent-dashboard" element={<AgentDashboard />} />
              {isAdmin && (
                <Route path="/admin" element={<AdminPanel />} />
>>>>>>> b5160007537f6b502fdbf07e4b39476c72bc53cd:src/App.jsx
              )}
            </Routes>
          </main>
        </>
      ) : (
        <div style={{ padding: 24 }}>
          <div style={{ marginBottom: 12 }}>
            <button onClick={() => setShowRegister(false)} disabled={!showRegister}>Login</button>
            <button onClick={() => setShowRegister(true)} disabled={showRegister} style={{ marginLeft: 8 }}>Register</button>
          </div>
          {showRegister ? (
            <Register onLogin={handleLogin} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      )}
    </Router>
  );
}

export default App;
