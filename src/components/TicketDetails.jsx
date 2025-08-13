import React from "react";

export default function TicketDetails({ ticket }) {
  return (
    <section
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        marginBottom: 20,
      }}
    >
      <h2>Détails du ticket #{ticket.id}</h2>
      <p>
        <strong>Type :</strong> {ticket.type}
      </p>
      <p>
        <strong>Description :</strong> {ticket.description}
      </p>
      <p>
        <strong>Localisation :</strong> {ticket.localisation}
      </p>
      <p>
        <strong>Statut :</strong> {ticket.statut}
      </p>
      <p>
        <strong>Date de création :</strong> {ticket.date}
      </p>
    </section>
  );
}
