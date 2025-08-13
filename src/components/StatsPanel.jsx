import React, { useMemo } from "react";

export default function StatsPanel({ tickets }) {
  const stats = useMemo(() => {
    const total = tickets.length;
    const ouverts = tickets.filter((t) => t.statut === "Ouvert").length;
    const enCours = tickets.filter((t) => t.statut === "En cours").length;
    const resolus = tickets.filter((t) => t.statut === "Résolu").length;

    return { total, ouverts, enCours, resolus };
  }, [tickets]);

  return (
    <div
      style={{
        marginTop: 20,
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 5,
      }}
    >
      <h3>Statistiques</h3>
      <p>Total tickets : {stats.total}</p>
      <p>Ouverts : {stats.ouverts}</p>
      <p>En cours : {stats.enCours}</p>
      <p>Résolus : {stats.resolus}</p>
    </div>
  );
}
