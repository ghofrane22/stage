// import React from "react";

// export default function Historique({ tickets, visible, onToggle }) {
//   return (
//     <section>
//       <h2>Historique des incidents</h2>
//       <button
//         onClick={onToggle}
//         style={{
//           marginBottom: 15,
//           padding: "8px 15px",
//           borderRadius: 5,
//           border: "1px solid #007bff",
//           backgroundColor: visible ? "#007bff" : "white",
//           color: visible ? "white" : "#007bff",
//           cursor: "pointer",
//         }}
//       >
//         {visible ? "Masquer" : "Afficher"} l'historique
//       </button>
//       {visible && (
//         <ul>
//           {tickets.length === 0 && <li>Aucun ticket dans l'historique.</li>}
//           {tickets.map((ticket) => (
//             <li key={ticket.id}>
//               #{ticket.id} - {ticket.type} - {ticket.statut} - {ticket.date}
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// }
import React from "react";

export default function Historique({ tickets, visible, onToggle }) {
  return (
    <section
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
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
        Historique des incidents
      </h2>

      <button
        onClick={onToggle}
        style={{
          marginBottom: "1rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          border: "1px solid #007bff",
          backgroundColor: visible ? "#007bff" : "#fff",
          color: visible ? "#fff" : "#007bff",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = visible ? "#0056b3" : "#f0f8ff";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = visible ? "#007bff" : "#fff";
        }}
      >
        {visible ? "Masquer" : "Afficher"} l'historique
      </button>

      {visible && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tickets.length === 0 && (
            <li
              style={{
                padding: "0.8rem",
                background: "#f9f9f9",
                borderRadius: "8px",
                color: "#666",
                fontStyle: "italic",
              }}
            >
              Aucun ticket dans l'historique.
            </li>
          )}
          {tickets.map((ticket) => (
            <li
              key={ticket.id}
              style={{
                padding: "0.8rem",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.95rem",
                color: "#444",
              }}
            >
              <span style={{ fontWeight: "500", color: "#007bff" }}>
                #{ticket.id}
              </span>
              <span>{ticket.type}</span>
              <span
                style={{
                  padding: "0.2rem 0.6rem",
                  borderRadius: "6px",
                  backgroundColor:
                    ticket.statut === "Résolu"
                      ? "#d4edda"
                      : ticket.statut === "En cours"
                      ? "#fff3cd"
                      : "#f8d7da",
                  color:
                    ticket.statut === "Résolu"
                      ? "#155724"
                      : ticket.statut === "En cours"
                      ? "#856404"
                      : "#721c24",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                }}
              >
                {ticket.statut}
              </span>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>
                {ticket.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
