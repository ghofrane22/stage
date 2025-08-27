// import React from "react";

// export default function IncidentForm({ formData, onChange, onSubmit }) {
//   return (
//     <section
//       style={{
//         marginBottom: 30,
//         border: "1px solid #ddd",
//         padding: 20,
//         borderRadius: 8,
//       }}
//     >
//       <h2>Signaler un incident</h2>
//       <form onSubmit={onSubmit}>
//         <label>
//           Type d'incident : <br />
//           <select
//             name="type"
//             value={formData.type}
//             onChange={onChange}
//             required
//           >
//             <option value="">-- Choisir --</option>
//             <option value="Panne Internet">Panne Internet</option>
//             <option value="Problème Téléphone">Problème Téléphone</option>
//             <option value="VPN">VPN</option>
//             <option value="Autre">Autre</option>
//           </select>
//         </label>
//         <br />
//         <br />

//         <label>
//           Description : <br />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={onChange}
//             rows={3}
//             placeholder="Décrivez le problème"
//             required
//             style={{ width: "100%" }}
//           />
//         </label>
//         <br />
//         <br />

//         <label>
//           Localisation : <br />
//           <input
//             type="text"
//             name="localisation"
//             value={formData.localisation}
//             onChange={onChange}
//             placeholder="Ex: Agence Tunis, étage 3"
//             required
//             style={{ width: "100%" }}
//           />
//         </label>
//         <br />
//         <br />

//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: 5,
//             cursor: "pointer",
//           }}
//         >
//           Envoyer
//         </button>
//       </form>
//     </section>
//   );
// }

import React from "react";

export default function IncidentForm({ formData, onChange, onSubmit }) {
  return (
    <section
      style={{
        marginBottom: "2rem",
        padding: "1.5rem",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: "#333",
          fontWeight: "600",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "0.5rem",
        }}
      >
        Signaler un incident
      </h2>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <label style={{ fontWeight: "500", color: "#555" }}>
          Type d'incident
          <select
            name="type"
            value={formData.type}
            onChange={onChange}
            required
            style={{
              width: "100%",
              marginTop: "0.4rem",
              padding: "0.6rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          >
            <option value="">-- Choisir --</option>
            <option value="Panne Internet">Panne Internet</option>
            <option value="Problème Téléphone">Problème Téléphone</option>
            <option value="VPN">VPN</option>
            <option value="Autre">Autre</option>
          </select>
        </label>

        <label style={{ fontWeight: "500", color: "#555" }}>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            rows={3}
            placeholder="Décrivez le problème"
            required
            style={{
              width: "100%",
              marginTop: "0.4rem",
              padding: "0.6rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </label>

        <label style={{ fontWeight: "500", color: "#555" }}>
          Localisation
          <input
            type="text"
            name="localisation"
            value={formData.localisation}
            onChange={onChange}
            placeholder="Ex: Agence Tunis, étage 3"
            required
            style={{
              width: "100%",
              marginTop: "0.4rem",
              padding: "0.6rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
