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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdminPanel from './components/AdminPanel';

const parseToken = (token) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return {};
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch (e) { return {}; }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
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
            <button onClick={handleLogout}>Déconnexion</button>
          </header>

          <HelpdeskChat />

          <main style={{ padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ticket-followup" element={<TicketFollowUp />} />
              <Route path="/contact" element={<ContactHelpdesk />} />
              <Route path="/agent-dashboard" element={<AgentDashboard />} />
              {isAdmin && (
                <Route path="/admin" element={<AdminPanel />} />
              )}
            </Routes>
          </main>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
