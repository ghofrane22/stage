// import React from "react";

// export default function TicketsTable({ tickets }) {
//   const filtered = tickets.filter(
//     (t) => t.statut === "Ouvert" || t.statut === "En cours"
//   );

//   if (filtered.length === 0) {
//     return <p>Aucun ticket ouvert.</p>;
//   }

//   return (
//     <section style={{ marginBottom: 30 }}>
//       <h2>Tickets ouverts</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#007bff", color: "white" }}>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               N° Ticket
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Type</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               Description
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>
//               Localisation
//             </th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Statut</th>
//             <th style={{ padding: "8px", border: "1px solid #ddd" }}>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filtered.map((ticket) => (
//             <tr key={ticket.id} style={{ borderBottom: "1px solid #ddd" }}>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 #{ticket.id}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {ticket.type}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {ticket.description}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {ticket.localisation}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {ticket.statut}
//               </td>
//               <td style={{ padding: "8px", border: "1px solid #ddd" }}>
//                 {ticket.date}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }

import React from "react";

export default function TicketsTable({ tickets }) {
  const filtered = tickets.filter(
    (t) => t.statut === "Ouvert" || t.statut === "En cours"
  );

  if (filtered.length === 0) {
    return (
      <p
        style={{
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "8px",
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Aucun ticket ouvert.
      </p>
    );
  }

  return (
    <section
      style={{
        marginBottom: "2rem",
        background: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
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
        Tickets ouverts
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.95rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={headerCell}>N° Ticket</th>
            <th style={headerCell}>Type</th>
            <th style={headerCell}>Description</th>
            <th style={headerCell}>Localisation</th>
            <th style={headerCell}>Statut</th>
            <th style={headerCell}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ticket, index) => (
            <tr
              key={ticket.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f1f7ff")}
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#fafafa" : "#fff")
              }
            >
              <td style={cell}>#{ticket.id}</td>
              <td style={cell}>{ticket.type}</td>
              <td style={cell}>{ticket.description}</td>
              <td style={cell}>{ticket.localisation}</td>
              <td style={{ ...cell, ...statusBadge(ticket.statut) }}>
                {ticket.statut}
              </td>
              <td style={{ ...cell, color: "#888" }}>{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const headerCell = {
  padding: "0.75rem",
  border: "none",
  textAlign: "left",
  fontWeight: "600",
};

const cell = {
  padding: "0.75rem",
  borderBottom: "1px solid #eee",
};

function statusBadge(status) {
  let styles = {};
  if (status === "Ouvert") {
    styles = { backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "6px" };
  } else if (status === "En cours") {
    styles = { backgroundColor: "#fff3cd", color: "#856404", borderRadius: "6px" };
  } else if (status === "Résolu") {
    styles = { backgroundColor: "#d4edda", color: "#155724", borderRadius: "6px" };
  }
  return { fontWeight: "500", padding: "0.2rem 0.5rem", textAlign: "center", ...styles };
}
