// import React, { useMemo } from "react";

// export default function StatsPanel({ tickets }) {
//   const stats = useMemo(() => {
//     const total = tickets.length;
//     const ouverts = tickets.filter((t) => t.statut === "Ouvert").length;
//     const enCours = tickets.filter((t) => t.statut === "En cours").length;
//     const resolus = tickets.filter((t) => t.statut === "Résolu").length;

//     return { total, ouverts, enCours, resolus };
//   }, [tickets]);

//   return (
//     <div
//       style={{
//         marginTop: 20,
//         padding: 10,
//         border: "1px solid #ddd",
//         borderRadius: 5,
//       }}
//     >
//       <h3>Statistiques</h3>
//       <p>Total tickets : {stats.total}</p>
//       <p>Ouverts : {stats.ouverts}</p>
//       <p>En cours : {stats.enCours}</p>
//       <p>Résolus : {stats.resolus}</p>
//     </div>
//   );
// }

import React, { useMemo } from "react";

export default function StatsPanel({ tickets }) {
  const stats = useMemo(() => {
    const total = tickets.length;
    const ouverts = tickets.filter((t) => t.statut === "Ouvert").length;
    const enCours = tickets.filter((t) => t.statut === "En cours").length;
    const resolus = tickets.filter((t) => t.statut === "Résolu").length;
    return { total, ouverts, enCours, resolus };
  }, [tickets]);

  const statBoxStyle = {
    flex: 1,
    padding: "1rem",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const statNumberStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#007bff",
    marginBottom: "0.3rem",
  };

  const containerStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
    flexWrap: "wrap",
  };

  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.3rem", fontWeight: 600, color: "#333" }}>
        Statistiques
      </h3>
      <div style={containerStyle}>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{stats.total}</div>
          <div>Total tickets</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{stats.ouverts}</div>
          <div>Ouverts</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{stats.enCours}</div>
          <div>En cours</div>
        </div>
        <div style={statBoxStyle}>
          <div style={statNumberStyle}>{stats.resolus}</div>
          <div>Résolus</div>
        </div>
      </div>
    </section>
  );
}
