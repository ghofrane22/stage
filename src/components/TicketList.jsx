import React from "react";

export default function TicketList({ tickets, onSelect, selectedTicketId }) {
  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: 0,
        maxHeight: 500,
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      {tickets.length === 0 && <li>Aucun ticket trouvé.</li>}
      {tickets.map((t) => (
        <li
          key={t.id}
          onClick={() => onSelect(t)}
          style={{
            cursor: "pointer",
            padding: 10,
            backgroundColor: t.id === selectedTicketId ? "#cce5ff" : "white",
            borderBottom: "1px solid #ddd",
          }}
        >
          <strong>{t.type}</strong> — {t.localisation} — <em>{t.statut}</em>
        </li>
      ))}
    </ul>
  );
}
