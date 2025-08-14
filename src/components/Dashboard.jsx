import React, { useState, useEffect } from "react";
import IncidentForm from "./IncidentForm";
import TicketsTable from "./TicketsTable";
import Historique from "./Historique";
import { Notifications } from "./Notifications";

export default function Dashboard() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      type: "Panne Internet",
      description: "Plus d'accès depuis 9h",
      localisation: "Agence Tunis - 3e étage",
      statut: "Ouvert",
      date: "2025-08-11 09:15",
    },
    {
      id: 2,
      type: "Problème Téléphone",
      description: "Ligne coupée",
      localisation: "Bureau 102",
      statut: "En cours",
      date: "2025-08-10 14:30",
    },
  ]);

  const [historiqueVisible, setHistoriqueVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    type: "",
    description: "",
    localisation: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTicket = tickets[Math.floor(Math.random() * tickets.length)];
      if (randomTicket) {
        addNotification(
          `Mise à jour sur ticket #${randomTicket.id}: statut "${randomTicket.statut}"`
        );
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [tickets]);

  function addNotification(msg) {
    setNotifications((prev) => [...prev, msg]);
  }

  function handleNotificationClose(index) {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.type || !formData.description || !formData.localisation) {
      alert("Merci de remplir tous les champs !");
      return;
    }
    const newTicket = {
      id: tickets.length + 1,
      type: formData.type,
      description: formData.description,
      localisation: formData.localisation,
      statut: "Ouvert",
      date: new Date().toISOString().slice(0, 16).replace("T", " "),
    };
    setTickets((prev) => [newTicket, ...prev]);
    addNotification(`Nouveau ticket créé #${newTicket.id}`);
    setFormData({ type: "", description: "", localisation: "" });
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Dashboard Utilisateur - Signalement d'incidents</h1>

      <Notifications
        notifications={notifications}
        onRemove={handleNotificationClose}
      />

      <IncidentForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <TicketsTable tickets={tickets} />

      <Historique
        tickets={tickets}
        visible={historiqueVisible}
        onToggle={() => setHistoriqueVisible(!historiqueVisible)}
      />
    </div>
  );
}


