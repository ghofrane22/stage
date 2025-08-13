// src/pages/IncidentHistory.jsx
import React from "react";

// Exemple de données statiques pour affichage
const dummyIncidents = [
  {
    id: 1,
    title: "Panne électrique dans le bâtiment A",
    status: "En cours",
    date: "2025-08-09",
  },
  {
    id: 2,
    title: "Fuite d'eau dans la salle 203",
    status: "Résolu",
    date: "2025-08-07",
  },
  {
    id: 3,
    title: "Problème d’accès au réseau Wi-Fi",
    status: "En cours",
    date: "2025-08-08",
  },
];

export default function IncidentHistory() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Historique des incidents</h1>

      {dummyIncidents.length === 0 ? (
        <p>Aucun incident signalé pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {dummyIncidents.map(({ id, title, status, date }) => (
            <li
              key={id}
              className="border border-gray-300 rounded p-4 bg-white shadow"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-600">Date : {date}</p>
              <p
                className={`mt-2 font-semibold ${
                  status === "Résolu"
                    ? "text-green-600"
                    : status === "En cours"
                    ? "text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Statut : {status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
