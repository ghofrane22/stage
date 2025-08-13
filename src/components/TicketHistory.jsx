import React from "react";

export default function TicketHistory({ history }) {
  if (!history.length) {
    return <p>Aucune action ou commentaire pour ce ticket.</p>;
  }
  return (
    <section style={{ marginBottom: 20 }}>
      <h3>Historique des actions</h3>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {history.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: 10,
              borderBottom: "1px solid #eee",
              paddingBottom: 10,
            }}
          >
            <p>
              <strong>{item.date}</strong> - <em>{item.auteur}</em>
            </p>
            <p>{item.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
