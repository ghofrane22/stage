// import React, { useState } from "react";

// export default function CommentForm({ onAdd }) {
//   const [texte, setTexte] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!texte.trim()) return;
//     onAdd(texte.trim());
//     setTexte("");
//   }

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
//       <textarea
//         rows={3}
//         value={texte}
//         onChange={(e) => setTexte(e.target.value)}
//         placeholder="Ajouter un commentaire"
//         style={{ width: "100%", padding: 8 }}
//       />
//       <button
//         type="submit"
//         style={{
//           marginTop: 5,
//           padding: "6px 12px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: 4,
//           cursor: "pointer",
//         }}
//       >
//         Ajouter
//       </button>
//     </form>
//   );
// }


import React, { useState } from "react";

export default function CommentForm({ onAdd }) {
  const [texte, setTexte] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!texte.trim()) return;
    onAdd(texte.trim());
    setTexte("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <textarea
        rows={3}
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Ajouter un commentaire"
        style={{
          width: "100%",
          padding: "0.8rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          alignSelf: "flex-start",
          padding: "0.7rem 1.4rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Ajouter
      </button>
    </form>
  );
}
