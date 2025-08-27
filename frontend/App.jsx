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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const role = localStorage.getItem("role"); // 🔑 récupération du rôle

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

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <header style={navBarStyle}>
            <NavLink to="/" style={navLinkStyle} end activeStyle={activeStyle}>
              Dashboard
            </NavLink>

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

            <button onClick={handleLogout}>Déconnexion</button>
          </header>

          {/* Chat visible pour tous */}
          <HelpdeskChat />

          <main style={{ padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />

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
