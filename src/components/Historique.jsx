import React from "react";

export default function Historique({ tickets, visible, onToggle }) {
  return (
    <section>
      <h2>Historique des incidents</h2>
      <button
        onClick={onToggle}
        style={{
          marginBottom: 15,
          padding: "8px 15px",
          borderRadius: 5,
          border: "1px solid #007bff",
          backgroundColor: visible ? "#007bff" : "white",
          color: visible ? "white" : "#007bff",
          cursor: "pointer",
        }}
      >
        {visible ? "Masquer" : "Afficher"} l'historique
      </button>
      {visible && (
        <ul>
          {tickets.length === 0 && <li>Aucun ticket dans l'historique.</li>}
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              #{ticket.id} - {ticket.type} - {ticket.statut} - {ticket.date}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
