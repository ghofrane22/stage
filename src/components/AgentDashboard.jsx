// import React, { useState, useMemo } from "react";
// import TicketList from "./TicketList";
// import TicketDetails from "./TicketDetails";
// import CommentForm from "./CommentForm";
// import StatsPanel from "./StatsPanel";

// export default function AgentDashboard() {
//   // Exemple tickets initiaux
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       type: "Panne réseau",
//       description: "Pas d'internet au bureau 3",
//       localisation: "Bureau 3",
//       statut: "Ouvert",
//       urgence: "Haute",
//       date: "2025-08-10 09:15",
//       commentaires: [{ auteur: "Admin", texte: "Ticket créé" }],
//     },
//     {
//       id: 2,
//       type: "Problème téléphone",
//       description: "Le téléphone ne sonne pas",
//       localisation: "Bureau 7",
//       statut: "En cours",
//       urgence: "Moyenne",
//       date: "2025-08-09 14:00",
//       commentaires: [],
//     },
//   ]);

//   const [filtre, setFiltre] = useState({
//     statut: "Tous",
//     urgence: "Tous",
//     localisation: "",
//   });

//   const [ticketSelectionne, setTicketSelectionne] = useState(null);

//   // Filtrage tickets
//   const ticketsFiltres = useMemo(() => {
//     return tickets.filter((t) => {
//       if (filtre.statut !== "Tous" && t.statut !== filtre.statut) return false;
//       if (filtre.urgence !== "Tous" && t.urgence !== filtre.urgence)
//         return false;
//       if (
//         filtre.localisation &&
//         !t.localisation
//           .toLowerCase()
//           .includes(filtre.localisation.toLowerCase())
//       )
//         return false;
//       return true;
//     });
//   }, [tickets, filtre]);

//   // Ajouter commentaire
//   function ajouterCommentaire(ticketId, texte) {
//     setTickets((tickets) =>
//       tickets.map((t) => {
//         if (t.id === ticketId) {
//           return {
//             ...t,
//             commentaires: [...t.commentaires, { auteur: "Agent", texte }],
//           };
//         }
//         return t;
//       })
//     );
//   }

//   // Modifier statut
//   function modifierStatut(ticketId, nouveauStatut) {
//     setTickets((tickets) =>
//       tickets.map((t) => {
//         if (t.id === ticketId) {
//           return { ...t, statut: nouveauStatut };
//         }
//         return t;
//       })
//     );
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: 20,
//         padding: 20,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Liste + filtres */}
//       <div style={{ flex: 1 }}>
//         <h2>Tickets</h2>
//         <div style={{ marginBottom: 10 }}>
//           <label>
//             Statut :{" "}
//             <select
//               value={filtre.statut}
//               onChange={(e) =>
//                 setFiltre((f) => ({ ...f, statut: e.target.value }))
//               }
//             >
//               <option>Tous</option>
//               <option>Ouvert</option>
//               <option>En cours</option>
//               <option>Résolu</option>
//               <option>Fermé</option>
//             </select>
//           </label>{" "}
//           <label>
//             Urgence :{" "}
//             <select
//               value={filtre.urgence}
//               onChange={(e) =>
//                 setFiltre((f) => ({ ...f, urgence: e.target.value }))
//               }
//             >
//               <option>Tous</option>
//               <option>Haute</option>
//               <option>Moyenne</option>
//               <option>Basse</option>
//             </select>
//           </label>{" "}
//           <label>
//             Localisation :{" "}
//             <input
//               type="text"
//               value={filtre.localisation}
//               onChange={(e) =>
//                 setFiltre((f) => ({ ...f, localisation: e.target.value }))
//               }
//               placeholder="Recherche localisation"
//             />
//           </label>
//         </div>
//         <TicketList
//           tickets={ticketsFiltres}
//           onSelect={setTicketSelectionne}
//           selectedTicketId={ticketSelectionne?.id}
//         />
//       </div>

//       {/* Détails + interaction */}
//       <div style={{ flex: 1 }}>
//         {ticketSelectionne ? (
//           <>
//             <TicketDetails ticket={ticketSelectionne} />
//             <CommentForm
//               onAdd={(texte) => ajouterCommentaire(ticketSelectionne.id, texte)}
//             />
//             <div style={{ marginTop: 10 }}>
//               <label>
//                 Modifier statut :{" "}
//                 <select
//                   value={ticketSelectionne.statut}
//                   onChange={(e) =>
//                     modifierStatut(ticketSelectionne.id, e.target.value)
//                   }
//                 >
//                   <option>Ouvert</option>
//                   <option>En cours</option>
//                   <option>Résolu</option>
//                   <option>Fermé</option>
//                 </select>
//               </label>
//             </div>
//           </>
//         ) : (
//           <p>Sélectionnez un ticket pour voir les détails</p>
//         )}

//         <StatsPanel tickets={tickets} />
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from "react";
import TicketList from "./TicketList";
import TicketDetails from "./TicketDetails";
import CommentForm from "./CommentForm";
import StatsPanel from "./StatsPanel";

export default function AgentDashboard() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      type: "Panne réseau",
      description: "Pas d'internet au bureau 3",
      localisation: "Bureau 3",
      statut: "Ouvert",
      urgence: "Haute",
      date: "2025-08-10 09:15",
      commentaires: [{ auteur: "Admin", texte: "Ticket créé" }],
    },
    {
      id: 2,
      type: "Problème téléphone",
      description: "Le téléphone ne sonne pas",
      localisation: "Bureau 7",
      statut: "En cours",
      urgence: "Moyenne",
      date: "2025-08-09 14:00",
      commentaires: [],
    },
  ]);

  const [filtre, setFiltre] = useState({ statut: "Tous", urgence: "Tous", localisation: "" });
  const [ticketSelectionne, setTicketSelectionne] = useState(null);

  const ticketsFiltres = useMemo(() => {
    return tickets.filter((t) => {
      if (filtre.statut !== "Tous" && t.statut !== filtre.statut) return false;
      if (filtre.urgence !== "Tous" && t.urgence !== filtre.urgence) return false;
      if (filtre.localisation && !t.localisation.toLowerCase().includes(filtre.localisation.toLowerCase()))
        return false;
      return true;
    });
  }, [tickets, filtre]);

  function ajouterCommentaire(ticketId, texte) {
    setTickets((tickets) =>
      tickets.map((t) => {
        if (t.id === ticketId) {
          return { ...t, commentaires: [...t.commentaires, { auteur: "Agent", texte }] };
        }
        return t;
      })
    );
  }

  function modifierStatut(ticketId, nouveauStatut) {
    setTickets((tickets) =>
      tickets.map((t) => (t.id === ticketId ? { ...t, statut: nouveauStatut } : t))
    );
  }

  const filterInputStyle = {
    padding: "0.6rem 0.8rem",
    fontSize: "0.95rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "0.8rem",
  };

  const filterLabelStyle = { marginBottom: "0.5rem", display: "inline-block", fontWeight: 500 };

  const selectStyle = { ...filterInputStyle, cursor: "pointer" };

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        flexWrap: "wrap",
      }}
    >
      {/* Liste + filtres */}
      <div style={{ flex: 1, minWidth: 300 }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#333" }}>Tickets</h2>
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <label style={filterLabelStyle}>
            Statut:
            <select
              value={filtre.statut}
              onChange={(e) => setFiltre((f) => ({ ...f, statut: e.target.value }))}
              style={selectStyle}
            >
              <option>Tous</option>
              <option>Ouvert</option>
              <option>En cours</option>
              <option>Résolu</option>
              <option>Fermé</option>
            </select>
          </label>

          <label style={filterLabelStyle}>
            Urgence:
            <select
              value={filtre.urgence}
              onChange={(e) => setFiltre((f) => ({ ...f, urgence: e.target.value }))}
              style={selectStyle}
            >
              <option>Tous</option>
              <option>Haute</option>
              <option>Moyenne</option>
              <option>Basse</option>
            </select>
          </label>

          <label style={filterLabelStyle}>
            Localisation:
            <input
              type="text"
              value={filtre.localisation}
              onChange={(e) => setFiltre((f) => ({ ...f, localisation: e.target.value }))}
              placeholder="Recherche localisation"
              style={filterInputStyle}
            />
          </label>
        </div>

        <TicketList
          tickets={ticketsFiltres}
          onSelect={setTicketSelectionne}
          selectedTicketId={ticketSelectionne?.id}
        />
      </div>

      {/* Détails + interaction */}
      <div style={{ flex: 1, minWidth: 300 }}>
        {ticketSelectionne ? (
          <>
            <TicketDetails ticket={ticketSelectionne} />
            <CommentForm onAdd={(texte) => ajouterCommentaire(ticketSelectionne.id, texte)} />

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <label style={{ fontWeight: 500 }}>
                Modifier statut:
                <select
                  value={ticketSelectionne.statut}
                  onChange={(e) => modifierStatut(ticketSelectionne.id, e.target.value)}
                  style={selectStyle}
                >
                  <option>Ouvert</option>
                  <option>En cours</option>
                  <option>Résolu</option>
                  <option>Fermé</option>
                </select>
              </label>
            </div>
          </>
        ) : (
          <p style={{ color: "#666", fontStyle: "italic" }}>Sélectionnez un ticket pour voir les détails</p>
        )}

        <StatsPanel tickets={tickets} />
      </div>
    </div>
  );
}
