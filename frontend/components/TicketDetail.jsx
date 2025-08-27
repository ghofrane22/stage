import React from "react";

export default function TicketDetails({ ticket }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
      }}
    >
      <h3>Détails du ticket #{ticket.id}</h3>
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
        <strong>Urgence :</strong> {ticket.urgence}
      </p>
      <p>
        <strong>Date :</strong> {ticket.date}
      </p>

      <div>
        <h4>Commentaires</h4>
        {ticket.commentaires.length === 0 && <p>Aucun commentaire.</p>}
        <ul>
          {ticket.commentaires.map((c, i) => (
            <li key={i}>
              <em>{c.auteur} :</em> {c.texte}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
