// import React from "react";

// export default function TicketList({ tickets, onSelect, selectedTicketId }) {
//   return (
//     <ul
//       style={{
//         listStyle: "none",
//         paddingLeft: 0,
//         maxHeight: 500,
//         overflowY: "auto",
//         border: "1px solid #ccc",
//         borderRadius: 5,
//       }}
//     >
//       {tickets.length === 0 && <li>Aucun ticket trouvé.</li>}
//       {tickets.map((t) => (
//         <li
//           key={t.id}
//           onClick={() => onSelect(t)}
//           style={{
//             cursor: "pointer",
//             padding: 10,
//             backgroundColor: t.id === selectedTicketId ? "#cce5ff" : "white",
//             borderBottom: "1px solid #ddd",
//           }}
//         >
//           <strong>{t.type}</strong> — {t.localisation} — <em>{t.statut}</em>
//         </li>
//       ))}
//     </ul>
//   );
// }


import React from "react";

export default function TicketList({ tickets, onSelect, selectedTicketId }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        maxHeight: 500,
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginBottom: "2rem",
      }}
    >
      {tickets.length === 0 && (
        <li
          style={{
            padding: "1rem",
            textAlign: "center",
            color: "#666",
            fontStyle: "italic",
          }}
        >
          Aucun ticket trouvé.
        </li>
      )}

      {tickets.map((t) => (
        <li
          key={t.id}
          onClick={() => onSelect(t)}
          style={{
            cursor: "pointer",
            padding: "0.8rem 1rem",
            backgroundColor: t.id === selectedTicketId ? "#cce5ff" : "#fff",
            borderBottom: "1px solid #eee",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) => {
            if (t.id !== selectedTicketId) e.currentTarget.style.backgroundColor = "#f0f8ff";
          }}
          onMouseOut={(e) => {
            if (t.id !== selectedTicketId) e.currentTarget.style.backgroundColor = "#fff";
          }}
        >
          <strong style={{ color: "#007bff" }}>{t.type}</strong> — {t.localisation} —{" "}
          <em style={{ color: "#555" }}>{t.statut}</em>
        </li>
      ))}
    </ul>
  );
}
