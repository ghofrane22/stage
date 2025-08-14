// import React, { useState } from "react";

// export default function AddComment({ onAdd }) {
//   const [comment, setComment] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!comment.trim()) return;
//     onAdd(comment.trim());
//     setComment("");
//   }

//   return (
//     <section style={{ marginBottom: 20 }}>
//       <h3>Ajouter un commentaire</h3>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           rows={4}
//           placeholder="Écrire un commentaire ou une mise à jour..."
//           style={{ width: "100%", padding: 10, fontSize: 14 }}
//         />
//         <button type="submit" style={{
//           marginTop: 10,
//           padding: "8px 16px",
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: 5,
//           cursor: "pointer"
//         }}>Envoyer</button>
//       </form>
//     </section>
//   );
// }


import React, { useState } from "react";

export default function AddComment({ onAdd }) {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;
    onAdd(comment.trim());
    setComment("");
  }

  return (
    <section
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        marginBottom: "2rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.3rem",
          marginBottom: "1rem",
          color: "#333",
          fontWeight: "600",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "0.4rem",
        }}
      >
        Ajouter un commentaire
      </h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Écrire un commentaire ou une mise à jour..."
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
            padding: "0.7rem 1.4rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            alignSelf: "flex-start",
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
