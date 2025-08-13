import React, { useState } from "react";
import TicketDetails from "./TicketDetails";
import TicketHistory from "./TicketHistory";
import AddComment from "./AddComment";

export default function TicketFollowUp() {
  // Exemple ticket et historique simulés
  const [ticket, setTicket] = useState({
    id: 12,
    type: "Panne Internet",
    description: "Plus d'accès à internet depuis ce matin",
    localisation: "Site principal - étage 4",
    statut: "En cours",
    date: "2025-08-11 08:30",
  });

  const [history, setHistory] = useState([
    {
      date: "2025-08-11 08:35",
      auteur: "Utilisateur",
      message: "Incident signalé",
    },
    {
      date: "2025-08-11 09:00",
      auteur: "Technicien Ahmed",
      message: "Intervention en cours",
    },
  ]);

  function handleAddComment(newComment) {
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");
    setHistory((prev) => [
      ...prev,
      { date: now, auteur: "Utilisateur", message: newComment },
    ]);
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Suivi détaillé du ticket</h1>
      <TicketDetails ticket={ticket} />
      <TicketHistory history={history} />
      <AddComment onAdd={handleAddComment} />
    </div>
  );
}
