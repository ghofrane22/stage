import React from "react";
import Dashboard from "./components/Dashboard";
import TicketFollowUp from "./components/TicketFollowUp";
import HelpdeskChat from "./components/HelpdeskChat";
import ContactHelpdesk from "./components/ContactHelpdesk";
import AgentDashboard from "./components/AgentDashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/ticket-followup">Suivi ticket</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/agent-dashboard">Dashboard Agent</Link>
      </nav>
      <HelpdeskChat /> {/* Chat accessible partout */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ticket-followup" element={<TicketFollowUp />} />
        <Route path="/contact" element={<ContactHelpdesk />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
