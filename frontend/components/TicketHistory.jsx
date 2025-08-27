// import React from "react";

// export default function TicketHistory({ history }) {
//   if (!history.length) {
//     return <p>Aucune action ou commentaire pour ce ticket.</p>;
//   }
//   return (
//     <section style={{ marginBottom: 20 }}>
//       <h3>Historique des actions</h3>
//       <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
//         {history.map((item, index) => (
//           <li
//             key={index}
//             style={{
//               marginBottom: 10,
//               borderBottom: "1px solid #eee",
//               paddingBottom: 10,
//             }}
//           >
//             <p>
//               <strong>{item.date}</strong> - <em>{item.auteur}</em>
//             </p>
//             <p>{item.message}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }


import React from "react";

export default function TicketHistory({ history }) {
  if (!history.length) {
    return (
      <p
        style={{
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "8px",
          color: "#666",
          fontStyle: "italic",
          marginBottom: "2rem",
        }}
      >
        Aucune action ou commentaire pour ce ticket.
      </p>
    );
  }

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
      <h3
        style={{
          fontSize: "1.3rem",
          marginBottom: "1rem",
          color: "#333",
          fontWeight: "600",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "0.4rem",
        }}
      >
        Historique des actions
      </h3>

      <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
        {history.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "0.8rem 0",
              borderBottom: index !== history.length - 1 ? "1px solid #eee" : "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ color: "#007bff" }}>{item.date}</strong>
              <em style={{ color: "#555" }}>{item.auteur}</em>
            </div>
            <p style={{ margin: 0, color: "#444" }}>{item.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
