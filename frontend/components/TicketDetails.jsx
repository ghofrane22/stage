// import React from "react";

// export default function TicketDetails({ ticket }) {
//   return (
//     <section
//       style={{
//         padding: 20,
//         border: "1px solid #ddd",
//         borderRadius: 8,
//         marginBottom: 20,
//       }}
//     >
//       <h2>Détails du ticket #{ticket.id}</h2>
//       <p>
//         <strong>Type :</strong> {ticket.type}
//       </p>
//       <p>
//         <strong>Description :</strong> {ticket.description}
//       </p>
//       <p>
//         <strong>Localisation :</strong> {ticket.localisation}
//       </p>
//       <p>
//         <strong>Statut :</strong> {ticket.statut}
//       </p>
//       <p>
//         <strong>Date de création :</strong> {ticket.date}
//       </p>
//     </section>
//   );
// }

import React from "react";

export default function TicketDetails({ ticket }) {
  return (
    <section
      style={{
        padding: "1.5rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        marginBottom: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: "#333",
          fontWeight: "600",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "0.5rem",
        }}
      >
        Détails du ticket <span style={{ color: "#007bff" }}>#{ticket.id}</span>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <DetailRow label="Type" value={ticket.type} />
        <DetailRow label="Description" value={ticket.description} />
        <DetailRow label="Localisation" value={ticket.localisation} />
        <DetailRow
          label="Statut"
          value={
            <span style={statusBadge(ticket.statut)}>{ticket.statut}</span>
          }
        />
        <DetailRow
          label="Date de création"
          value={<span style={{ color: "#888" }}>{ticket.date}</span>}
        />
      </div>
    </section>
  );
}

function DetailRow({ label, value }) {
  return (
    <p style={{ margin: 0, fontSize: "1rem", color: "#444" }}>
      <strong style={{ color: "#555" }}>{label} :</strong> {value}
    </p>
  );
}

function statusBadge(status) {
  let styles = {};
  if (status === "Ouvert") {
    styles = { backgroundColor: "#f8d7da", color: "#721c24" };
  } else if (status === "En cours") {
    styles = { backgroundColor: "#fff3cd", color: "#856404" };
  } else if (status === "Résolu") {
    styles = { backgroundColor: "#d4edda", color: "#155724" };
  }
  return {
    fontWeight: "500",
    padding: "0.2rem 0.5rem",
    borderRadius: "6px",
    ...styles,
  };
}
