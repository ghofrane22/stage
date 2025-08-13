import React from "react";

export default function TicketsTable({ tickets }) {
  const filtered = tickets.filter(
    (t) => t.statut === "Ouvert" || t.statut === "En cours"
  );

  if (filtered.length === 0) {
    return <p>Aucun ticket ouvert.</p>;
  }

  return (
    <section style={{ marginBottom: 30 }}>
      <h2>Tickets ouverts</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              N° Ticket
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Type</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Description
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Localisation
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Statut</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ticket) => (
            <tr key={ticket.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                #{ticket.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {ticket.type}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {ticket.description}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {ticket.localisation}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {ticket.statut}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {ticket.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
